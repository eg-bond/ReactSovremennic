import { memo } from 'react';
import { VkVideoEmbed } from '@/components/VkVideoEmbed';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks';
import * as s from './SelectedMovie.css.ts';
import type { SpecialStateT } from '@/REDUX/special/specialReducerT';

export const DescriptionTrailer = memo<DescriptionTrailerT>(
  function DescriptionTrailer({
    description,
trailer_src,
fontSize,
  }) {
    const gridClass = fontSize !== '26px' ? s.descTrailerGrid : s.fullFr;

    return (
      <div className={gridClass} key={trailer_src}>
        <p className={s.description} style={{ fontWeight: 'bold' }}>Описание:</p>
        <p className={s.description}>
          {formatTextWithLineBreaks(description)}
        </p>
        <VkVideoEmbed videoId={trailer_src} />
      </div>
    );
  },
);

type DescriptionTrailerT = {
  description: string;
  fontSize: SpecialStateT['fontSize'];
  trailer_src: string;
};
