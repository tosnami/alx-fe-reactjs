import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['/*.{js,jsx}'], // غيّر هذا ليشمل جميع الملفات
    languageOptions: {
      ecmaVersion: 2020,
      parser: '@babel/eslint-parser', // أضف دعم JSX عبر Babel
      globals: {
        ...globals.browser,
        jest: true, // دعم Jest
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]+' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // السماح بـ JSX في js
    },
  },
];