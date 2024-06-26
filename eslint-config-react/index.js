module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',

    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',

    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
};
