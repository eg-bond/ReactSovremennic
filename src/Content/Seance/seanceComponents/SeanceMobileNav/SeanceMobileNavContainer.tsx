import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
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

  // Track whether slides have been initially loaded (async data fetch completed)
  const hasInitialized = useRef(false);

  // Scroll to the active day. On first run (async data just arrived) we call
  // reInit() so Embla measures the newly added slides. On subsequent runs
  // (day switching) we just scroll smoothly without reInit.
  useEffect(() => {
    if (!emblaApi) return;
    if (datesArr.length === 0) return;
    if (!activeScheduleItemKey) return;

    const activeIndex = datesArr.findIndex(
      ([key]) => key === activeScheduleItemKey,
    );

    if (activeIndex === -1) return;

    if (!hasInitialized.current) {
      hasInitialized.current = true;
      // Re-initialize Embla to pick up slides that appeared after async data load
      emblaApi.reInit();
    }

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
