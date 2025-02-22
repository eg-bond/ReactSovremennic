import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import parser from '@html-eslint/parser';
import tseslint from 'typescript-eslint';
import html from '@html-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';
import newLineDest from 'eslint-plugin-newline-destructuring';

export default tseslint.config(
  { ignores: ['dist', 'yarn.lock', 'coverage'] },
  // config for JSON files
  {
    ...json.configs.recommended,
    files: ['**/*.json'],
    plugins: {
      json,
    },
    language: 'json/json',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
  // Config for HTML files
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
    },
    languageOptions: {
      parser,
    },
    rules: {
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/quotes': ['error', 'double'],
      '@html-eslint/no-extra-spacing-attrs': [
        'error',
        { enforceBeforeSelfClose: true },
      ],
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
    },
  },
  // Config for JS and TS files
  {
    extends: [
      stylistic.configs.customize({
        indent: 2,
        quotes: 'single',
        semi: true,
        jsx: true,
        blockSpacing: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        quoteProps: 'consistent-as-needed',
      }),
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{js,mjs,ts,tsx}', 'eslint.config.js', 'App.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      'newline-destructuring': newLineDest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // sorting with perfectionist plugin ---------------------------------
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          newlinesBetween: 'never',
          groups: [
            ['builtin', 'external'],
            // ['parent', 'sibling', 'index'],
            'object',
            'unknown',
            'type',
            'style',
          ],
          environment: 'node',
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'alphabetical',
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'alphabetical',
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'alphabetical',
          groups: [
            'shorthand',
            'multiline',
            'unknown',
            'callback',
          ],
          customGroups: {
            callback: '^on.+',
          },
        },
      ],
      // Semicolons -----------------------------------------------------
      '@stylistic/no-extra-semi': 'error',
      // Lines ----------------------------------------------------------
      '@stylistic/max-len': [
        'warn',
        {
          code: 85,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreRegExpLiterals: true,
        },
      ],
      // Line breaks ----------------------------------------------------
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      // Spacing ---------------------------------------------------------
      '@stylistic/switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      // Objects ---------------------------------------------------------
      // Новая строка для {} объекта.
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, consistent: true },
          ObjectPattern: { multiline: true, consistent: true },
          ExportDeclaration: { multiline: true, consistent: true },
          ImportDeclaration: { multiline: true, consistent: true },
          TSInterfaceBody: 'always',
          TSTypeLiteral: 'always',
        },
      ],
      // Новая строка для свойств объекта
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      // Тоже что и object-property-newline но для деструктуризации (плагин)
      'newline-destructuring/newline': 'error',

      // Arrays ----------------------------------------------------------------
      // Новая строка для [] массива.
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      // Новая строка для элементов массива
      '@stylistic/array-element-newline': ['error', 'consistent'],
      // Chaining
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

      // JSX ------------------------------------------------------
      // Максимальное количество пропсов компоненты в одной строке
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: { single: 3, multi: 1 },
      }],
      // Сортировка по алфавиту
      // '@stylistic/jsx-sort-props': ['error', {
      //   callbacksLast: true,
      //   shorthandFirst: true,
      //   multiline: 'last',
      //   locale: 'auto',
      // }],
    },
  },

);
