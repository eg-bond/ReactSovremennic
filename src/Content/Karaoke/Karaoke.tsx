import { useState, useEffect, useCallback, useRef } from 'react';
import { karaokeDB, KaraokeSong } from '../../utils/karaokeDB';
import './karaoke.scss';

export default function Karaoke() {
  const [songs, setSongs] = useState<KaraokeSong[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [dbReady, setDbReady] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const LIMIT = 50;

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

        setDbReady(true);
        const initial = await karaokeDB.getAll(LIMIT);
        setSongs(initial);
        setHasMore(initial.length === LIMIT);
        setTotalCount(count);
      } catch (error) {
        console.error('Ошибка инициализации БД:', error);
      } finally {
        setLoading(false);
      }
    };

    initDB();
  }, []);

  const loadMore = useCallback(async () => {
    if (!dbReady || !hasMore || loading) return;

    try {
      const offset = page * LIMIT;
      const newSongs = search
        ? await karaokeDB.search(search, offset + LIMIT)
        : await karaokeDB.getAll(offset + LIMIT);

      const sliced = newSongs.slice(offset);
      if (sliced.length > 0) {
        setSongs(prev => [...prev, ...sliced]);
        setPage(prev => prev + 1);
        setHasMore(sliced.length === LIMIT);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
  }, [dbReady, hasMore, loading, page, search]);

  const performSearch = useCallback(async (query: string) => {
    if (!dbReady) return;
    setPage(1);
    setSearching(true);

    try {
      const allResults = await karaokeDB.searchAll(query);
      setTotalCount(allResults.length);
      const results = allResults.slice(0, LIMIT);
      setSongs(results);
      setHasMore(allResults.length > LIMIT);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    } finally {
      setSearching(false);
    }
  }, [dbReady]);

  const handleSearch = useCallback((query: string) => {
    setSearch(query);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      performSearch(query);
    }, 500);
  }, [performSearch]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore]);

  return (
    <div className="karaoke-container">
      <h1>Список песен для караоке</h1>

      <div className="karaoke-search">
        <input
          className="karaoke-search-input"
          placeholder="Введите исполнителя или название трека"
          type="text"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      {loading && (
        <div className="karaoke-loading">
          <div className="karaoke-spinner" />
        </div>
      )}

      <div className="karaoke-results">
        <p className="karaoke-count">
          Найдено песен:
          {totalCount}
          {searching && <span className="karaoke-count-spinner" />}
        </p>

        <div className="karaoke-list">
          {songs.map(song => (
            <div className="karaoke-item" key={song.id}>
              <span className="karaoke-id">{song.id}</span>
              <span className="karaoke-artist">{song.artist}</span>
              <span className="karaoke-song">{song.song}</span>
            </div>
          ))}
          {hasMore && <div className="karaoke-loader" ref={loadMoreRef} />}
        </div>
      </div>
    </div>
  );
}
