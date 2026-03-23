import { useState } from 'react';
import * as s from './FilmImg.css';

type FilmImgProps = {
  age: string;
  containerClassName?: string;
  link: string;
  pirate: boolean;
  rounded?: boolean;
  title: string;
};

export const FilmImg = ({
  age,
  containerClassName,
  link,
  pirate,
  rounded = true,
  title,
}: FilmImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={`${s.container} ${!loaded ? 'skeleton skeleton-Gray' : ''} ${
        containerClassName || ''
      }`}
      style={{ borderRadius: rounded ? undefined : 0 }}
    >
      <img
        alt={title}
        className={`${s.img} ${loaded ? s.imgLoaded : ''}`}
        src={`Images/description/${link}.webp`}
        onLoad={handleLoad}
      />

      <div className={s.ageRating}>
        {age}
      </div>

      {pirate && (
        <div className={s.pirateBanner}>
          <span style={{ textTransform: 'uppercase' }}>
            в рамках предсеансового обслуживания перед фильмом "Снегур"
          </span>
        </div>
      )}
    </div>
  );
};
