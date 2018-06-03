module.export = {
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 7,
		sourceType: "script",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		semi: 2,
		"no-var": 2 // require let or const instead of var (off by default)
	},
	env: {
		es6: true,
		mocha: false
	}
};
