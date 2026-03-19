import { useImgLoaded } from '../../hooks/useImgLoaded';

export const FilmImg = ({
  age,
  containerClassName,
  link,
  onLoad: onLoadCallback,
  pirate,
  rounded = true,
  title,
}: {
  age: string;
  containerClassName?: string;
  link: string;
  onLoad?: () => void;
  pirate: boolean;
  rounded?: boolean;
  title: string;
}) => {
  const { imgLoaded, onLoad } = useImgLoaded(link);

  const handleLoad = () => {
    onLoad();
    onLoadCallback?.();
  };

  return (
    <div
      className={`selectedMovie__image ${!imgLoaded ? 'skeleton' : ''} ${
        containerClassName || ''
      }`}
      style={{ position: 'relative', borderRadius: rounded ? undefined : 0 }}
    >
      <img
        alt={title}
        className="fadeIn"
        key={link + 'SM'}
        src={`Images/description/${link}.webp`}
        onLoad={handleLoad}
      />

      {/* Age Rating Badge */}
      <div className="selectedMovie__ageRating">
        {age}
      </div>

      {/* Pirate Banner */}
      {pirate && (
        <div className="selectedMovie__pirateBanner">
          <span style={{ textTransform: 'uppercase' }}>
            в рамках предсеансового обслуживания перед фильмом "Снегур"
          </span>
        </div>
      )}
    </div>
  );
};
