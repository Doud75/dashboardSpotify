import svelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				extraFileExtensions: ['.svelte'],
			},
		},
		plugins: { svelte, prettier: prettierPlugin },
		rules: {
			'prettier/prettier': [
				'error',
				{
					svelteSortOrder: 'options-scripts-styles-markup', // Correspond à la configuration Prettier
					svelteStrictMode: false,
					svelteBracketNewLine: true,
					svelteAllowShorthand: true,
				},
			],
			'svelte/valid-compile': 'error',
			'svelte/no-at-html-tags': 'warn',
		},
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				NodeJS: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: prettierPlugin,
			import: importPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external', 'internal', 'parent', 'sibling', 'index']],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'import/extensions': [
				'error',
				'ignorePackages',
				{ js: 'never', ts: 'never', svelte: 'always', scss: 'always' },
			],
			'import/no-unresolved': 'error',
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
				alias: {
					map: [['@', './src']],
					extensions: ['.ts', '.js', '.svelte', '.json'],
				},
			},
		},
	},
];
