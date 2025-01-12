import { useState } from 'react';

export const SushiWork = () => {
  return (
    <div className="sushiWork">
      <img
        alt="работа_суши"
        className="sushiWork__img"
        src="Images/work_sushi_half.webp"
      />
    </div>
  );
};

export function SushiWorkModal({ loaded = true, onLoad = () => {} }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={`desktopAdv desktopAdv--5 ${!loaded ? 'skeleton' : ''} `}>
        <img
          alt="суши_работа"
          src="Images/work_sushi_sm.webp"
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
            src="Images/work_sushi.webp"
          />
        </div>
      </div>
    </div>
  );
}
