import { useState } from 'react';
import { MOST_IMPORTANT_STYLES } from '../scheduleStyles';
import type { StyleOverrides } from '../scheduleGenerator';

type FormatKey = 'F2' | 'F3' | 'F4' | 'F5' | 'F6';

interface FormatState {
  topPadding: number;
  bottomPadding: number;
  posterHeight: number;
  seansTop: number;
}

export const useFormatStyles = () => {
  const [formatStates, setFormatStates] = useState<Record<FormatKey, FormatState>>({
    F2: {
      topPadding: MOST_IMPORTANT_STYLES.F2.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F2.bottomPadding,
      posterHeight: MOST_IMPORTANT_STYLES.F2.posterHeight,
      seansTop: MOST_IMPORTANT_STYLES.F2.seansTop,
    },
    F3: {
      topPadding: MOST_IMPORTANT_STYLES.F3.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F3.bottomPadding,
      posterHeight: MOST_IMPORTANT_STYLES.F3.posterHeight,
      seansTop: MOST_IMPORTANT_STYLES.F3.seansTop,
    },
    F4: {
      topPadding: MOST_IMPORTANT_STYLES.F4.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F4.bottomPadding,
      posterHeight: MOST_IMPORTANT_STYLES.F4.posterHeight,
      seansTop: MOST_IMPORTANT_STYLES.F4.seansTop,
    },
    F5: {
      topPadding: MOST_IMPORTANT_STYLES.F5.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F5.bottomPadding,
      posterHeight: MOST_IMPORTANT_STYLES.F5.posterHeight,
      seansTop: MOST_IMPORTANT_STYLES.F5.seansTop,
    },
    F6: {
      topPadding: MOST_IMPORTANT_STYLES.F6.topPadding,
      bottomPadding: MOST_IMPORTANT_STYLES.F6.bottomPadding,
      posterHeight: MOST_IMPORTANT_STYLES.F6.posterHeight,
      seansTop: MOST_IMPORTANT_STYLES.F6.seansTop,
    },
  });

  const updateFormatStyle = (format: FormatKey, key: keyof FormatState, value: number) => {
    setFormatStates(prev => ({
      ...prev,
      [format]: { ...prev[format], [key]: value },
    }));
  };

  const getStyleOverrides = (): StyleOverrides => ({
    F2: formatStates.F2,
    F3: formatStates.F3,
    F4: formatStates.F4,
    F5: formatStates.F5,
    F6: formatStates.F6,
  });

  return {
    formatStates,
    updateFormatStyle,
    getStyleOverrides,
  };
};
