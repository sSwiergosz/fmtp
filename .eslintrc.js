module.exports = {
	extends: [
		'next',
		'next/core-web-vitals',
		'eslint:recommended',
		'@fandom-frontend/eslint-config',
		'@fandom-frontend/eslint-config/react',
		'@fandom-frontend/eslint-config/typescript',
	],
	// plugins: ['prettier'],
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	rules: {
		'class-methods-use-this': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'max-len': 0,
		'no-console': 0,
		'no-restricted-imports': 0,
		'no-unused-expressions': 0,
		'no-use-before-define': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-cycle': 0,
		'no-unused-vars': 0, // enabled TS-specific rule instead
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'no-var': 1,
		'prettier/prettier': ['error', require('@fandom-frontend/prettier-config')],
		'no-empty': ['error', { allowEmptyCatch: true }],
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				// destructuredArrayIgnorePattern: '^_', // - added in next eslint
				varsIgnorePattern: '^_',
			},
		],
	},
	root: true,
};
