module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': ['off'],
    'object-curly-newline': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'indent': ['error', 4],
    'no-else-return': ['error',{allowElseIf: true}],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/no-array-index-key': ['off'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
  },
};
