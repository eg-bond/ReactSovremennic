import { useKaraokeDB } from '../../hooks/useKaraokeDB';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export default function Karaoke() {
  const {
    songs,
    search,
    loading,
    searching,
    loadingMore,
    hasMore,
    totalCount,
    handleSearch,
    loadMore,
  } = useKaraokeDB();

  const loadMoreRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div className="karaoke-container">
      <h1>Список песен для караоке</h1>

      <div className="karaoke-search">
        <input
          className="karaoke-search-input"
          placeholder="Введите исполнителя или трек"
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
          {` ${totalCount}`}
          {searching && <span className="karaoke-count-spinner" />}
        </p>

        <div className="karaoke-list">
          {songs.map(song => (
            <div className="karaoke-item" key={song.id}>
              <span className="karaoke-artist">{song.artist}</span>
              <span className="karaoke-song">{song.song}</span>
            </div>
          ))}
          {hasMore && (
            <div className="karaoke-loader" ref={loadMoreRef}>
              {loadingMore && <div className="karaoke-loader-spinner" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
