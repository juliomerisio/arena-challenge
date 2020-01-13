module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    "cypress/globals": true

  },
  extends: [
    'airbnb',
    "prettier",
    "prettier/react",
    "plugin:cypress/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,

  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'import-helpers',
    "cypress"
  ],
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
    'import-helpers/order-imports': [
      'warn',
      { 
          newlinesBetween: 'always',
          groups: [
            '/^react/',
              'module',
              '/^~/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
  ],
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": "off",
    "no-param-reassign": "off",
    'no-console': ['error', { allow: ['tron'] }],
    'react/jsx-props-no-spreading': 'off',
    "jsx-a11y/control-has-associated-label": "off"
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
