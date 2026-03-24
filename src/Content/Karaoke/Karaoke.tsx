import { useKaraokeDB } from '../../hooks/useKaraokeDB';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import * as s from './Karaoke.css.ts';

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
    <div className={s.container}>
      <h1>Список песен для караоке</h1>

      <div className={s.search}>
        <input
          className={s.searchInput}
          placeholder="Введите исполнителя или трек"
          type="text"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      {loading && (
        <div className={s.loading}>
          <div className={s.spinner} />
        </div>
      )}

      <div>
        <p className={s.count}>
          Найдено песен:
          {` ${totalCount}`}
          {searching && <span className={s.countSpinner} />}
        </p>

        <div className={s.list}>
          {songs.map(song => (
            <div className={s.item} key={song.id}>
              <span className={s.artist}>{song.artist}</span>
              <span className={s.song}>{song.song}</span>
            </div>
          ))}
          {hasMore && (
            <div className={s.loader} ref={loadMoreRef}>
              {loadingMore && <div className={s.loaderSpinner} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
