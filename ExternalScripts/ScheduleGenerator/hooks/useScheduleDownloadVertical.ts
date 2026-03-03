import { useState } from 'react';
import {
  dayKeyToDateName,
  type AgeRatingMapping,
} from '../utils/mappings';
import {
  generateVerticalScheduleImage,
  downloadImage,
  drawVerticalSchedule,
} from '../scheduleGeneratorVertical';
import type { ScheduleData } from '../utils/transformSchedule';

interface UseScheduleDownloadVerticalReturn {
  downloadAll: () => Promise<void>;
  downloadDay: () => Promise<void>;
  downloadWeekdaySchedules: () => Promise<void>;
  downloadWeekendSchedules: () => Promise<void>;
  isGenerating: boolean;
  previewDay: () => Promise<void>;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

export const useScheduleDownloadVertical = (
  scheduleData: ScheduleData,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  ageRatingMapping?: AgeRatingMapping,
): UseScheduleDownloadVerticalReturn => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadDay = async () => {
    if (!selectedDay) return;
    setIsGenerating(true);
    try {
      const dataUrl = await generateVerticalScheduleImage(
        scheduleData,
        ageRatingMapping,
        selectedDay,
      );
      const fileName = `${dayKeyToDateName[selectedDay]}_vertical.jpg`;
      downloadImage(dataUrl, fileName);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadAll = async () => {
    setIsGenerating(true);
    try {
      for (const dayKey of Object.keys(scheduleData)) {
        const dataUrl = await generateVerticalScheduleImage(
          scheduleData,
          ageRatingMapping,
          dayKey,
        );
        const fileName = `${dayKeyToDateName[dayKey]}_vertical.jpg`;
        downloadImage(dataUrl, fileName);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWeekdaySchedules = async () => {
    setIsGenerating(true);
    try {
      const weekdayKeys = ['day1', 'day2', 'day3'];
      for (const dayKey of weekdayKeys) {
        if (scheduleData[dayKey]) {
          const dataUrl = await generateVerticalScheduleImage(
            scheduleData,
            ageRatingMapping,
            dayKey,
          );
          const fileName = `${dayKeyToDateName[dayKey]}_vertical.jpg`;
          downloadImage(dataUrl, fileName);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWeekendSchedules = async () => {
    setIsGenerating(true);
    try {
      const weekendKeys = ['day4', 'day5', 'day6', 'day0'];
      for (const dayKey of weekendKeys) {
        if (scheduleData[dayKey]) {
          const dataUrl = await generateVerticalScheduleImage(
            scheduleData,
            ageRatingMapping,
            dayKey,
          );
          const fileName = `${dayKeyToDateName[dayKey]}_vertical.jpg`;
          downloadImage(dataUrl, fileName);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const previewDay = async () => {
    if (!canvasRef.current || !selectedDay) return;
    setIsGenerating(true);
    try {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        await drawVerticalSchedule(
          ctx,
          scheduleData,
          ageRatingMapping,
          selectedDay,
          1080,
          1920,
        );
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    selectedDay,
    setSelectedDay,
    isGenerating,
    downloadDay,
    downloadAll,
    downloadWeekdaySchedules,
    downloadWeekendSchedules,
    previewDay,
  };
};
