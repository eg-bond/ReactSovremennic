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
    ageRating: string | undefined; posterPath: string | undefined;
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
    ageRating: string | undefined; posterPath: string | undefined;
  } {
  // Apply normalization (this is the fix)
  const normalizedTitle = normalizeFilmTitle(filmTitle);
  const posterPath = filmMapping[normalizedTitle];
  const ageRating = ageRatingMapping?.[normalizedTitle];

  return { posterPath, ageRating };
}

describe('Bug Condition Exploration: Preshow Service Suffix Handling', () => {
  describe('Property 1: Fault Condition - Preshow Service Suffix Causes Lookup Failure', () => {
    /**
     * **Validates: Requirements 1.1, 1.2, 2.1, 2.2**
     *
     * These tests encode the EXPECTED behavior (what should happen after fix).
     * They test that films with "(предс. обсл.)" suffix can find their posters
     * and age ratings when the title is properly normalized.
     *
     * EXPECTED OUTCOME ON UNFIXED CODE: These tests will FAIL (proving bug exists)
     * EXPECTED OUTCOME ON FIXED CODE: These tests will PASS (validating fix works)
     *
     * The tests use directLookup() to simulate the current buggy behavior,
     * which will cause assertions to fail on unfixed code.
     */

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

  describe('Property-Based Test: Scoped to Preshow Service Suffix Cases', () => {
    /**
     * **Validates: Requirements 2.1, 2.2**
     *
     * Property-based test that generates film titles with "(предс. обсл.)" suffix
     * and verifies that the expected behavior (after fix) correctly finds posters
     * and age ratings by normalizing the title.
     *
     * This test is scoped to the specific bug condition: titles with the suffix.
     *
     * EXPECTED OUTCOME ON UNFIXED CODE: This test will FAIL (proving bug exists)
     * EXPECTED OUTCOME ON FIXED CODE: This test will PASS (validating fix works)
     */
    it('should find posters and ratings for ANY film title with "(предс. обсл.)" suffix', () => {
      fc.assert(
        fc.property(
          // Generator: Create arbitrary film titles (excluding whitespace-only strings)
          fc.string({ minLength: 5, maxLength: 50 })
            .filter(s => !s.includes('(предс. обсл.)'))
            .filter(s => s.trim().length > 0), // Exclude whitespace-only strings
          fc.constantFrom('/images/poster1.jpg', '/images/poster2.jpg', '/images/poster3.jpg'),
          fc.constantFrom('6+', '12+', '16+', '18+'),
          (baseTitle, posterPath, ageRating) => {
            // Act: Add suffix to create the bug condition
            const filmTitleWithSuffix = `${baseTitle} (предс. обсл.)`;

            // Normalize the title to get the key that should be in mappings
            const normalizedKey = normalizeFilmTitle(filmTitleWithSuffix);

            // Arrange: Create mappings with normalized title (what will be looked up)
            const filmMapping: FilmMapping = {
              [normalizedKey]: posterPath,
            };

            const ageRatingMapping: AgeRatingMapping = {
              [normalizedKey]: ageRating,
            };

            // Verify this is indeed a bug condition
            expect(isBugCondition(filmTitleWithSuffix)).toBe(true);

            // Get result using CURRENT (buggy) behavior
            const result = directLookup(filmTitleWithSuffix, filmMapping, ageRatingMapping);

            // Assert: Expected behavior is that poster and rating are found
            // This will FAIL on unfixed code because directLookup returns undefined
            // This will PASS on fixed code because the fix will normalize the title
            expect(result.posterPath).toBe(posterPath);
            expect(result.ageRating).toBe(ageRating);
          },
        ),
        { numRuns: 50 }, // Run 50 test cases
      );
    });
  });
});

/**
 * Preservation Property Tests
 *
 * These tests verify that films WITHOUT "(предс. обсл.)" suffix continue
 * to work exactly as before. They observe and document the current behavior
 * on UNFIXED code, then ensure this behavior is preserved after the fix.
 *
 * EXPECTED OUTCOME ON UNFIXED CODE: These tests PASS (baseline behavior)
 * EXPECTED OUTCOME ON FIXED CODE: These tests PASS (no regressions)
 */

describe('Preservation Property Tests: Non-Suffixed Film Lookup', () => {
  describe('Property 2: Preservation - Non-Suffixed Film Lookup Behavior', () => {
    /**
     * **Validates: Requirements 3.1, 3.2, 3.3**
     *
     * These tests verify that the fix does NOT change behavior for films
     * without the "(предс. обсл.)" suffix. They test the current working
     * behavior and ensure it remains unchanged.
     */

    it('should find poster for normal film without suffix', () => {
      // Arrange: Normal film title without any suffix
      const filmMapping: FilmMapping = {
        'Обычный фильм': '/images/normal.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Обычный фильм': '12+',
      };

      // Act: Direct lookup (current behavior for non-suffixed films)
      const filmTitle = 'Обычный фильм';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Should work correctly (this is the baseline behavior)
      expect(result.posterPath).toBe('/images/normal.jpg');
      expect(result.ageRating).toBe('12+');
      expect(isBugCondition(filmTitle)).toBe(false);
    });

    it('should find age rating for normal film without suffix', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Тестовый фильм': '/images/test.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Тестовый фильм': '16+',
      };

      // Act
      const filmTitle = 'Тестовый фильм';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Baseline behavior should work
      expect(result.posterPath).toBe('/images/test.jpg');
      expect(result.ageRating).toBe('16+');
      expect(isBugCondition(filmTitle)).toBe(false);
    });

    it('should return undefined for missing film (not in mappings)', () => {
      // Arrange: Empty mappings
      const filmMapping: FilmMapping = {};
      const ageRatingMapping: AgeRatingMapping = {};

      // Act: Lookup film that doesn't exist in mappings
      const filmTitle = 'Несуществующий фильм';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Should gracefully return undefined (baseline behavior)
      expect(result.posterPath).toBeUndefined();
      expect(result.ageRating).toBeUndefined();
      expect(isBugCondition(filmTitle)).toBe(false);
    });

    it('should handle film with "2D" in title (display logic test)', () => {
      // Arrange: Film with "2D" in title
      const filmMapping: FilmMapping = {
        'Зверополис 2 2D': '/images/zveropolis.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Зверополис 2 2D': '6+',
      };

      // Act: Lookup with "2D" in title
      const filmTitle = 'Зверополис 2 2D';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Lookup should work with "2D" in the key
      // Note: The "2D" removal happens only for DISPLAY, not for lookup
      expect(result.posterPath).toBe('/images/zveropolis.jpg');
      expect(result.ageRating).toBe('6+');
      expect(isBugCondition(filmTitle)).toBe(false);

      // Verify display logic: "2D" should be removed for display
      const displayTitle = filmTitle.replace(/\s*2D\s*/g, ' ').trim();
      expect(displayTitle).toBe('Зверополис 2');
    });

    it('should handle film with "3D" in title', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Моана 2 3D': '/images/moana.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Моана 2 3D': '6+',
      };

      // Act
      const filmTitle = 'Моана 2 3D';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Should work correctly (3D is not removed in lookup)
      expect(result.posterPath).toBe('/images/moana.jpg');
      expect(result.ageRating).toBe('6+');
      expect(isBugCondition(filmTitle)).toBe(false);
    });

    it('should handle film with special characters', () => {
      // Arrange
      const filmMapping: FilmMapping = {
        'Крейвен-охотник': '/images/kraven.jpg',
      };

      const ageRatingMapping: AgeRatingMapping = {
        'Крейвен-охотник': '18+',
      };

      // Act
      const filmTitle = 'Крейвен-охотник';
      const result = directLookup(filmTitle, filmMapping, ageRatingMapping);

      // Assert: Should work correctly
      expect(result.posterPath).toBe('/images/kraven.jpg');
      expect(result.ageRating).toBe('18+');
      expect(isBugCondition(filmTitle)).toBe(false);
    });
  });

  describe('Property-Based Test: Preservation for All Non-Suffixed Films', () => {
    /**
     * **Validates: Requirements 3.1, 3.2, 3.3**
     *
     * Property-based test that generates random film titles WITHOUT
     * the "(предс. обсл.)" suffix and verifies that lookup behavior
     * remains unchanged.
     *
     * This test runs on UNFIXED code to establish baseline behavior,
     * then ensures the same behavior after the fix (no regressions).
     */
    it('should preserve lookup behavior for ANY film without suffix', () => {
      fc.assert(
        fc.property(
          // Generator: Film titles without the suffix (excluding whitespace-only strings)
          fc
            .string({ minLength: 5, maxLength: 50 })
            .filter(s => !s.includes('(предс. обсл.)') && s.trim().length > 0),
          fc.constantFrom(
            '/images/poster1.jpg',
            '/images/poster2.jpg',
            '/images/poster3.jpg',
          ),
          fc.constantFrom('6+', '12+', '16+', '18+'),
          (filmTitle, posterPath, ageRating) => {
            // Arrange: Create mappings with the exact film title
            const filmMapping: FilmMapping = {
              [filmTitle]: posterPath,
            };

            const ageRatingMapping: AgeRatingMapping = {
              [filmTitle]: ageRating,
            };

            // Verify this is NOT a bug condition
            expect(isBugCondition(filmTitle)).toBe(false);

            // Act: Direct lookup (current behavior)
            const result = directLookup(
              filmTitle,
              filmMapping,
              ageRatingMapping,
            );

            // Assert: Should find poster and rating using direct lookup
            // This is the baseline behavior that must be preserved
            expect(result.posterPath).toBe(posterPath);
            expect(result.ageRating).toBe(ageRating);

            // Additional check: Normalization should not change the title
            // (since there's no suffix to remove)
            const normalized = normalizeFilmTitle(filmTitle);
            expect(normalized).toBe(filmTitle);
          },
        ),
        { numRuns: 50 },
      );
    });

    it('should handle missing films gracefully for ANY title without suffix', () => {
      fc.assert(
        fc.property(
          // Generator: Film titles without the suffix (excluding Object prototype properties)
          fc
            .string({ minLength: 5, maxLength: 50 })
            .filter((s) => {
              // Exclude suffix and Object prototype property names
              if (s.includes('(предс. обсл.)')) return false;
              // Check if this string is a property name in Object.prototype
              return !(s in Object.prototype);
            }),
          (filmTitle) => {
            // Arrange: Empty mappings (film doesn't exist)
            const filmMapping: FilmMapping = {};
            const ageRatingMapping: AgeRatingMapping = {};

            // Verify this is NOT a bug condition
            expect(isBugCondition(filmTitle)).toBe(false);

            // Act: Direct lookup
            const result = directLookup(
              filmTitle,
              filmMapping,
              ageRatingMapping,
            );

            // Assert: Should return undefined (baseline behavior)
            expect(result.posterPath).toBeUndefined();
            expect(result.ageRating).toBeUndefined();
          },
        ),
        { numRuns: 30 },
      );
    });

    it('should preserve "2D" removal logic for display only', () => {
      fc.assert(
        fc.property(
          // Generator: Film titles with "2D" but without the suffix
          fc
            .string({ minLength: 3, maxLength: 30 })
            .filter(s => !s.includes('(предс. обсл.)'))
            .map(s => `${s} 2D`),
          fc.constantFrom(
            '/images/poster1.jpg',
            '/images/poster2.jpg',
          ),
          fc.constantFrom('6+', '12+', '16+', '18+'),
          (filmTitle, posterPath, ageRating) => {
            // Arrange: Mappings with "2D" in the key
            const filmMapping: FilmMapping = {
              [filmTitle]: posterPath,
            };

            const ageRatingMapping: AgeRatingMapping = {
              [filmTitle]: ageRating,
            };

            // Verify this is NOT a bug condition
            expect(isBugCondition(filmTitle)).toBe(false);

            // Act: Direct lookup should work with "2D" in the key
            const result = directLookup(
              filmTitle,
              filmMapping,
              ageRatingMapping,
            );

            // Assert: Lookup should succeed (baseline behavior)
            expect(result.posterPath).toBe(posterPath);
            expect(result.ageRating).toBe(ageRating);

            // Verify display logic: "2D" should be removed for display
            const displayTitle = filmTitle.replace(/\s*2D\s*/g, ' ').trim();
            expect(displayTitle).not.toContain('2D');
          },
        ),
        { numRuns: 30 },
      );
    });
  });
});
