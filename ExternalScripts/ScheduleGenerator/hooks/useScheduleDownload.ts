import { useState } from 'react';
import {
  dayKeyToDateName,
  type AgeRatingMapping,
  type FilmMapping,
  type PirateMapping,
} from '../utils/mappings';
import {
  drawDaySchedule,
  generateScheduleImage,
  downloadImage,
  type StyleOverrides,
} from '../horizontal/scheduleGenerator';
import type { ScheduleData } from '../utils/transformSchedule';

interface UseScheduleDownloadReturn {
  downloadAll: () => Promise<void>;
  downloadDay: () => Promise<void>;
  downloadWeekdaySchedules: () => Promise<void>;
  downloadWeekendSchedules: () => Promise<void>;
  isGenerating: boolean;
  previewDay: () => Promise<void>;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

export const useScheduleDownload = (
  scheduleData: ScheduleData,
  filmMapping: FilmMapping,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  ageRatingMapping?: AgeRatingMapping,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
): UseScheduleDownloadReturn => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadDay = async () => {
    if (!selectedDay) return;
    setIsGenerating(true);
    try {
      const dataUrl = await generateScheduleImage(
        scheduleData,
        filmMapping,
        ageRatingMapping,
        selectedDay,
        pirateMapping,
        styleOverrides,
      );
      const fileName = `${dayKeyToDateName[selectedDay]}.jpg`;
      downloadImage(dataUrl, fileName);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadAll = async () => {
    setIsGenerating(true);
    try {
      for (const dayKey of Object.keys(scheduleData)) {
        const dataUrl = await generateScheduleImage(
          scheduleData,
          filmMapping,
          ageRatingMapping,
          dayKey,
          pirateMapping,
          styleOverrides,
        );
        const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
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
          const dataUrl = await generateScheduleImage(
            scheduleData,
            filmMapping,
            ageRatingMapping,
            dayKey,
            pirateMapping,
            styleOverrides,
          );
          const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
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
          const dataUrl = await generateScheduleImage(
            scheduleData,
            filmMapping,
            ageRatingMapping,
            dayKey,
            pirateMapping,
            styleOverrides,
          );
          const fileName = `${dayKeyToDateName[dayKey]}.jpg`;
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
        await drawDaySchedule(
          ctx,
          scheduleData,
          filmMapping,
          ageRatingMapping,
          selectedDay,
          1920,
          1080,
          pirateMapping,
          styleOverrides,
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
