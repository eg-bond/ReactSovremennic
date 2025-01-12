import { memo } from 'react';
import { convertVideoId } from '@/utils/convertVideoId';
import { SpecialStateT } from '../../REDUX/special/specialReducerT';

export const DescriptionTrailer = memo<DescriptionTrailerT>(
  function DescriptionTrailer({
    description,
trailer_src,
fontSize,
  }) {
    const gridClass =
      fontSize !== '26px' ? 'descTrailer--grid' : 'selectedMovie--fullFr';

    const videoSrc = `https://vkvideo.ru/video_ext.php?oid=-${convertVideoId(
      trailer_src,
    )}`;

    return (
      <div className={gridClass} key={trailer_src}>
        <p className="selectedMovie__description">{description}</p>
        <div className="embed-responsive">
          <iframe
            allow={
              'encrypted-media; fullscreen; ' +
              'picture-in-picture; screen-wake-lock;'
            }
            height="360"
            src={videoSrc}
            width="640"
          >
          </iframe>
        </div>
      </div>
    );
  },
);

type DescriptionTrailerT = {
  description: string;
  fontSize: SpecialStateT['fontSize'];
  trailer_src: string;
};
