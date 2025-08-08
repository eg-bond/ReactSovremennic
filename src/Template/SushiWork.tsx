import { useState } from 'react';
import { useImagesLoaded } from '@/hooks/useImagesLoaded';

export const SushiWork = () => {
  return (
    <div className="sushiWork">
      <img
        alt="работа_суши"
        className="sushiWork__img"
        src="Images/bar_work_big.webp"
      />
    </div>
  );
};

export function SushiWorkModal() {
  const [open, setOpen] = useState(false);
  const { allImgLoaded, onLoad } = useImagesLoaded(1);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={`desktopAdv desktopAdv--5 ${!allImgLoaded ? 'skeleton' : ''} `}>
        <img
          alt="суши_работа"
          src="Images/bar_work.webp"
          onClick={() => setOpen(true)}
          onLoad={onLoad}
        />
      </div>

      <div
        className="overlay"
        style={{ display: open ? 'block' : 'none' }}
        onClick={handleClose}
      >
        <div className="modal">
          <img
            alt="суши_работа"
            className="modal__img"
            src="Images/bar_work_big.webp"
          />
        </div>
      </div>
    </div>
  );
}
