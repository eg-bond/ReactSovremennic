import { useState, useEffect, useCallback, useRef } from 'react';
import { karaokeDB, KaraokeSong } from '../utils/karaokeDB';

const LIMIT = 50;
const DEBOUNCE_DELAY = 500;

interface KaraokeState {
  dbReady: boolean;
  hasMore: boolean;
  loading: boolean;
  loadingMore: boolean;
  page: number;
  search: string;
  searching: boolean;
  songs: KaraokeSong[];
  totalCount: number;
}

export const useKaraokeDB = () => {
  const [state, setState] = useState<KaraokeState>({
    songs: [],
    search: '',
    loading: true,
    searching: false,
    loadingMore: false,
    dbReady: false,
    page: 1,
    hasMore: true,
    totalCount: 0,
  });
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const allResultsRef = useRef<KaraokeSong[]>([]);

  useEffect(() => {
    const initDB = async () => {
      try {
        await karaokeDB.init();
        const count = await karaokeDB.getCount();

        if (count === 0) {
          const response = await fetch('/karaoke_songs.json');
          const data = await response.json();
          await karaokeDB.loadSongs(data);
        }

        const initial = await karaokeDB.getAll(LIMIT);
        setState(prev => ({
          ...prev,
          dbReady: true,
          loading: false,
          songs: initial,
          hasMore: initial.length === LIMIT,
          totalCount: count,
        }));
      } catch (error) {
        console.error('Ошибка инициализации БД:', error);
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    initDB();
  }, []);

  const loadMore = useCallback(async () => {
    if (!state.dbReady || !state.hasMore || state.loading || state.loadingMore) return;

    setState(prev => ({ ...prev, loadingMore: true }));

    const offset = state.page * LIMIT;
    const source = state.search ? allResultsRef.current : await karaokeDB.getAll(offset + LIMIT);
    const sliced = source.slice(offset, offset + LIMIT);

    if (sliced.length > 0) {
      setState(prev => ({
        ...prev,
        songs: [...prev.songs, ...sliced],
        page: prev.page + 1,
        hasMore: sliced.length === LIMIT,
        loadingMore: false,
      }));
    } else {
      setState(prev => ({ ...prev, hasMore: false, loadingMore: false }));
    }
  }, [state.dbReady, state.hasMore, state.loading, state.loadingMore, state.page, state.search]);

  const performSearch = useCallback(async (query: string) => {
    if (!state.dbReady) return;

    setState(prev => ({ ...prev, searching: true, page: 1 }));

    try {
      const allResults = await karaokeDB.searchAll(query);
      allResultsRef.current = allResults;
      const results = allResults.slice(0, LIMIT);

      setState(prev => ({
        ...prev,
        songs: results,
        totalCount: allResults.length,
        hasMore: allResults.length > LIMIT,
        searching: false,
      }));
    } catch (error) {
      console.error('Ошибка поиска:', error);
      setState(prev => ({ ...prev, searching: false }));
    }
  }, [state.dbReady]);

  const handleSearch = useCallback((query: string) => {
    setState(prev => ({ ...prev, search: query }));

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => performSearch(query), DEBOUNCE_DELAY);
  }, [performSearch]);

  useEffect(() => () => debounceRef.current && clearTimeout(debounceRef.current), []);

  return {
    ...state,
    handleSearch,
    loadMore,
  };
};
