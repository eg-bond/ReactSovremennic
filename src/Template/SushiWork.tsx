import { useState } from 'react';

export const SushiWork = () => {
  return (
    <div className='sushiWork'>
      <img
        className='sushiWork__img'
        src='Images/work_sushi_half.webp'
        alt='работа_суши'
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
          onClick={() => setOpen(true)}
          onLoad={onLoad}
          src='Images/work_sushi_sm.webp'
          alt='суши_работа'
        />
      </div>

      <div
        style={{ display: open ? 'block' : 'none' }}
        className='overlay'
        onClick={handleClose}>
        <div className='modal'>
          <img
            className='modal__img'
            src='Images/work_sushi.webp'
            alt='суши_работа'
          />
        </div>
      </div>
    </div>
  );
}
