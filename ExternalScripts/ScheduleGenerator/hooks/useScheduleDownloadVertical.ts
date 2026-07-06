import { useState } from 'react';
import {
  generateVerticalScheduleImage,
  generateWeekdayScheduleImage,
  generateWeekendScheduleImage,
  downloadImage,
  drawWeekdaySchedule,
  drawWeekendSchedule,
  type StyleOverrides,
} from '../vertical/scheduleGeneratorVertical';
import type { ScheduleData } from '../utils/transformSchedule';
import type {
  AgeRatingMapping,
  FilmMapping,
  PirateMapping,
} from '../utils/mappings';

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
  dayKeyToDateName: Record<string, string>,
  ageRatingMapping?: AgeRatingMapping,
  pirateMapping?: PirateMapping,
  styleOverrides?: StyleOverrides,
  filmMapping?: FilmMapping,
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
        dayKeyToDateName,
        pirateMapping,
        styleOverrides,
        filmMapping,
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
          dayKeyToDateName,
          pirateMapping,
          styleOverrides,
          filmMapping,
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
      const dataUrl = await generateWeekdayScheduleImage(
        scheduleData,
        ageRatingMapping,
        dayKeyToDateName,
        pirateMapping,
        styleOverrides,
        filmMapping,
      );
      downloadImage(dataUrl, 'weekday_schedule_vertical.jpg');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWeekendSchedules = async () => {
    setIsGenerating(true);
    try {
      const dataUrl = await generateWeekendScheduleImage(
        scheduleData,
        ageRatingMapping,
        dayKeyToDateName,
        pirateMapping,
        styleOverrides,
        filmMapping,
      );
      downloadImage(dataUrl, 'weekend_schedule_vertical.jpg');
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
        const isWeekday = ['day1', 'day2', 'day3'].includes(selectedDay);
        if (isWeekday) {
          await drawWeekdaySchedule(
            ctx,
            scheduleData,
            ageRatingMapping,
            1080,
            1920,
            dayKeyToDateName,
            pirateMapping,
            styleOverrides,
            filmMapping,
          );
        } else {
          await drawWeekendSchedule(
            ctx,
            scheduleData,
            ageRatingMapping,
            1080,
            1920,
            dayKeyToDateName,
            pirateMapping,
            styleOverrides,
            filmMapping,
          );
        }
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
