import { useState } from 'react';
import * as s from './SushiWork.css.ts';

export const SushiWork = () => (
  <div className={s.sushiWork}>
    <img
      alt="работа_суши"
      className={s.sushiWorkImg}
      src="Images/bar_work_big.webp"
    />
  </div>
);

export const SushiWorkModal = () => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className={`${s.advContainer} ${!loaded ? 'skeleton' : ''}`}>
        <img
          alt="суши_работа"
          src="Images/bar_work.webp"
          onClick={() => setOpen(true)}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {open && (
        <div className={s.overlay} onClick={() => setOpen(false)}>
          <div className={s.modal}>
            <img
              alt="суши_работа"
              className={s.modalImg}
              src="Images/bar_work_big.webp"
            />
          </div>
        </div>
      )}
    </div>
  );
};
