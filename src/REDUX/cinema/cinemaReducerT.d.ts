import { filmsArray } from '../filmsArray';

type FilmsArrayT = typeof filmsArray;

type FilmItemT = FilmsArrayT[0];

type CinemaStateT = {
  films: FilmsArrayT;
  filmsObject: FilmsObjectT;
  filmsToday: FilmsArrayT;
  filmsTodayLinks: string[];
};

type FilmsObjectT = {
  [index: string]: FilmItemT;
};

export type { FilmsArrayT, CinemaStateT, FilmsObjectT, FilmItemT };
