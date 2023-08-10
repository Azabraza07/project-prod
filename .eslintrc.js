module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  	parser: '@typescript-eslint/parser',
	ecmaFeatures: {
		jsx: true
	}
  },
  ignorePatterns: ['.eslintrc.js'],

  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
    'plugin:react/recommended',
	"plugin:react/jsx-runtime",
    'eslint:recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files:['**/*.ts', '**/*.tsx']

    }
  ],

  plugins: ['react','@typescript-eslint','react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
	'@typescript-eslint/explicit-function-return-type': 'off'
  }
}
