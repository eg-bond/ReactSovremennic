import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SeanceMobileNav from './SeanceMobileNav';
import type { ChangeTableContentT } from '@/Content/Seance/Seance';

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

export const SeanceMobileNavContainer = ({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}: {
  activeScheduleItemKey: string;
  changeTableContent: ChangeTableContentT;
  datesArr: Array<[string, string, string]>;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
    duration: 25,
  });

  // Scroll to the active day whenever activeScheduleItemKey or datesArr change.
  // reInit ensures Embla re-measures slides after the DOM updates (e.g., when
  // datesArr loads asynchronously and slides appear after initial mount).
  useEffect(() => {
    if (!emblaApi) return;
    if (datesArr.length === 0) return;
    if (!activeScheduleItemKey) return;

    const activeIndex = datesArr.findIndex(
      ([key]) => key === activeScheduleItemKey,
    );

    if (activeIndex === -1) return;

    // Re-initialize Embla to pick up any new slides (e.g., after async data load),
    // then scroll to the active index.
    emblaApi.reInit();
    emblaApi.scrollTo(activeIndex);
  }, [emblaApi, activeScheduleItemKey, datesArr]);

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
