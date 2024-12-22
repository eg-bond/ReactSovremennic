import { memo } from 'react';
import { SpecialStateT } from '../../REDUX/special/specialReducerT';
import { convertVideoId } from '@/utils/convertVideoId';

export const DescriptionTrailer = memo<DescriptionTrailerT>(
  function DescriptionTrailer({ description, trailer_src, fontSize }) {
    const gridClass =
      fontSize !== '26px' ? 'descTrailer--grid' : 'selectedMovie--fullFr';

    const videoSrc = `https://vkvideo.ru/video_ext.php?oid=-${convertVideoId(
      trailer_src
    )}`;

    return (
      <div key={trailer_src} className={gridClass}>
        <p className='selectedMovie__description'>{description}</p>
        <div className='embed-responsive'>
          <iframe
            src={videoSrc}
            width='640'
            height='360'
            allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'></iframe>
        </div>
      </div>
    );
  }
);

type DescriptionTrailerT = {
  description: string;
  trailer_src: string;
  fontSize: SpecialStateT['fontSize'];
};
