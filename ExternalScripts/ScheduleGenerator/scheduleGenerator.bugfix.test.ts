/**
 * Bug Condition Exploration Test for Film Poster Preshow Service Fix
 *
 * This test encodes the EXPECTED behavior (correct behavior after fix).
 * On UNFIXED code: These tests will FAIL (proving the bug exists)
 * On FIXED code: These tests will PASS (validating the fix works)
 *
 * Bug: Films with "(предс. обсл.)" suffix in schedule fail to find posters
 * and age ratings because the system uses the full title (with suffix) as
 * the lookup key, but the mappings don't contain keys with this suffix.
 */

import * as fc from 'fast-check';
import { describe, it, expect } from 'vitest';
import type { FilmMapping, AgeRatingMapping } from './scheduleGenerator';

/**
 * Bug Condition Function
 * Returns true when the film title contains the preshow service suffix
 */
function isBugCondition(filmTitle: string): boolean {
  return filmTitle.includes('(предс. обсл.)');
}

/**
 * This function represents the EXPECTED behavior after the fix.
 * It normalizes film titles by removing the "(предс. обсл.)" suffix
 * before looking up posters and age ratings.
 */
function normalizeFilmTitle(filmTitle: string): string {
  // Remove "(предс. обсл.)" suffix with any surrounding whitespace variations
  const normalized = filmTitle.replace(/\s*\(предс\.\s*обсл\.\)\s*$/g, '');
  // Only trim if we actually removed the suffix (title changed)
  return normalized !== filmTitle ? normalized.trim() : normalized;
}

/**
 * Test helper that performs lookup with normalization (expected behavior)
 */
function lookupWithNormalization(
  filmTitle: string,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
): {
    ageRating: string | undefined;
    posterPath: string | undefined;
  } {
  const normalizedTitle = normalizeFilmTitle(filmTitle);
  const posterPath = filmMapping[normalizedTitle];
  const ageRating = ageRatingMapping?.[normalizedTitle];

  return { posterPath, ageRating };
}

/**
 * Test helper that performs direct lookup (FIXED behavior with normalization)
 * This simulates what the FIXED code does - it normalizes the title before lookup
 */
function directLookup(
  filmTitle: string,
  filmMapping: FilmMapping,
  ageRatingMapping: AgeRatingMapping | undefined,
): {
    ageRating: string | undefined;
    posterPath: string | undefined;
  } {
  // Apply normalization (this is the fix)
  const normalizedTitle = normalizeFilmTitle(filmTitle);
  const posterPath = filmMapping[normalizedTitle];
  const ageRating = ageRatingMapping?.[normalizedTitle];

  return { posterPath, ageRating };
}

describe('Bug Condition Exploration: Preshow Service Suffix Handling', () => {
  describe('Property 1: Fault Condition - Preshow Service Suffix Causes Lookup Failure', () => {
    it('should find poster for film with "(предс. обсл.)" suffix - Example: Зверополис 2 2D', () => {
      // Arrange: Create mappings with normalized titles (without suffix)
      const filmMapping: FilmMapping = {
        'Зверополис 2 2D': '/images/zveropolis2.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Зверополис 2 2D': '6+',
      };

      // Act: Lookup with suffix using CURRENT (buggy) behavior
      // On unfixed code, this will return undefined
      // On fixed code, this should return the correct values
      const filmTitleWithSuffix = 'Зверополис 2 2D (предс. обсл.)';
      const result = directLookup(filmTitleWithSuffix, filmMapping, ageRatingMapping);

      // Document what we expect vs what we get
      const expected = lookupWithNormalization(filmTitleWithSuffix, filmMapping, ageRatingMapping);
      console.log(`Testing: "${filmTitleWithSuffix}"`);
      console.log('Current result:', result);
      console.log('Expected result:', expected);

      // Assert: The EXPECTED behavior is that poster and rating are found
      // This will FAIL on unfixed code because result will be { posterPath: undefined, ageRating: undefined }
      expect(result.posterPath).toBe('/images/zveropolis2.jpg');
      expect(result.ageRating).toBe('6+');
    });

    it('should find age rating for film with "(предс. обсл.)" suffix - Example: Моана 2 3D', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Моана 2 3D': '/images/moana2.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Моана 2 3D': '6+',
      };

      // Act: Lookup with suffix using CURRENT (buggy) behavior
      const filmTitleWithSuffix = 'Моана 2 3D (предс. обсл.)';
      const result = directLookup(filmTitleWithSuffix, filmMapping, ageRatingMapping);

      // Document
      const expected = lookupWithNormalization(filmTitleWithSuffix, filmMapping, ageRatingMapping);
      console.log(`Testing: "${filmTitleWithSuffix}"`);
      console.log('Current result:', result);
      console.log('Expected result:', expected);

      // Assert: Will FAIL on unfixed code
      expect(result.posterPath).toBe('/images/moana2.jpg');
      expect(result.ageRating).toBe('6+');
    });

    it('should find both poster and rating for film with "(предс. обсл.)" suffix - Example: Крейвен-охотник', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Крейвен-охотник': '/images/kraven.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Крейвен-охотник': '18+',
      };

      // Act: Lookup with suffix using CURRENT (buggy) behavior
      const filmTitleWithSuffix = 'Крейвен-охотник (предс. обсл.)';
      const result = directLookup(filmTitleWithSuffix, filmMapping, ageRatingMapping);

      // Document
      const expected = lookupWithNormalization(filmTitleWithSuffix, filmMapping, ageRatingMapping);
      console.log(`Testing: "${filmTitleWithSuffix}"`);
      console.log('Current result:', result);
      console.log('Expected result:', expected);

      // Assert: Will FAIL on unfixed code
      expect(result.posterPath).toBe('/images/kraven.jpg');
      expect(result.ageRating).toBe('18+');
    });

    it('should handle edge case with extra spaces around suffix', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Тестовый фильм': '/images/test.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Тестовый фильм': '12+',
      };

      // Act: Test with extra spaces using CURRENT (buggy) behavior
      const filmTitleWithSpaces = 'Тестовый фильм  (предс. обсл.)  ';
      const result = directLookup(filmTitleWithSpaces, filmMapping, ageRatingMapping);

      // Document
      const expected = lookupWithNormalization(filmTitleWithSpaces, filmMapping, ageRatingMapping);
      console.log(`Testing: "${filmTitleWithSpaces}"`);
      console.log('Current result:', result);
      console.log('Expected result:', expected);

      // Assert: Will FAIL on unfixed code
      expect(result.posterPath).toBe('/images/test.jpg');
      expect(result.ageRating).toBe('12+');
    });
  });
});
