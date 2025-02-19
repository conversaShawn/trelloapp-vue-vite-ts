module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'cypress', 'no-only-tests'],
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-pause': 'error',
    'no-only-tests/no-only-tests': 'error',
    'quotes': ['error', 'single']
  }
};
