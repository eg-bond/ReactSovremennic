import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SeanceMobileNav from './SeanceMobileNav';
import type { ChangeTableContentT } from '@/Content/Seance/Seance';
import type {
  DateKeysT,
  SeanceStateT,
} from '@/REDUX/seance/seanceReducerT';

export const SeanceMobileNavContainer = ({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}: {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  changeTableContent: ChangeTableContentT;
  datesArr: SeanceStateT['datesArr'];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
    duration: 25,
  });

  const handleClick = useCallback(
    (
      _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      dateKey: DateKeysT,
      index: number,
    ) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
      changeTableContent(dateKey);
    },
    [emblaApi, changeTableContent],
  );

  return (
    <SeanceMobileNav
      activeScheduleItemKey={activeScheduleItemKey}
      datesArr={datesArr}
      emblaRef={emblaRef}
      handleClick={handleClick}
    />
  );
};

export default SeanceMobileNavContainer;
