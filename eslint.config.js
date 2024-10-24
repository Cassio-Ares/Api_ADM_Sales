import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  eslint.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint','plugin:prettier/recommended'),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': eslint.configs.prettier
    },
    rules: {
      'no-console': 'warn',
      'prettier/prettier': 'error'
    },
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];


/**
 * install:
 * npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * npm install --save-dev @eslint/js @eslint/eslintrc
 */
