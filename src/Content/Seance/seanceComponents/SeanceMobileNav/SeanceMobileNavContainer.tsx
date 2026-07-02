import { useCallback, useState } from 'react';
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
  const [isChanging, setIsChanging] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
  });

  const handleClick = useCallback(
    (
      _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      dateKey: DateKeysT,
      index: number,
    ) => {
      if (!emblaApi) return;

      setIsChanging(true);
      emblaApi.scrollTo(index);

      setTimeout(() => setIsChanging(false), 350);
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
      isChanging={isChanging}
    />
  );
};

export default SeanceMobileNavContainer;
