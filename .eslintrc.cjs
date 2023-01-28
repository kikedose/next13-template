module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['contexts', './src/contexts'],
          ['services', './src/services'],
          ['styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
