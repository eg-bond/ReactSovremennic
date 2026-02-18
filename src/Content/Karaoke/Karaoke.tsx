import { useState, useEffect, useCallback } from 'react';
import { karaokeDB, KaraokeSong } from '../../utils/karaokeDB';
import './karaoke.scss';

export default function Karaoke() {
  const [songs, setSongs] = useState<KaraokeSong[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [dbReady, setDbReady] = useState(false);

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
        const initial = await karaokeDB.getAll(100);
        setSongs(initial);
      } catch (error) {
        console.error('Ошибка инициализации БД:', error);
      } finally {
        setLoading(false);
      }
    };

    initDB();
  }, []);

  const handleSearch = useCallback(async (query: string) => {
    if (!dbReady) return;
    setSearch(query);

    try {
      const results = await karaokeDB.search(query, 100);
      setSongs(results);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    }
  }, [dbReady]);

  if (loading) {
    return <div className="karaoke-loading">Загрузка базы караоке...</div>;
  }

  return (
    <div className="karaoke-container">
      <h1>Караоке</h1>

      <div className="karaoke-search">
        <input
          className="karaoke-search-input"
          placeholder="Поиск по исполнителю или названию..."
          type="text"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      <div className="karaoke-results">
        <p className="karaoke-count">
          Найдено:
          {songs.length}
        </p>

        <div className="karaoke-list">
          {songs.map(song => (
            <div className="karaoke-item" key={song.id}>
              <span className="karaoke-id">{song.id}</span>
              <span className="karaoke-artist">{song.artist}</span>
              <span className="karaoke-song">{song.song}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
