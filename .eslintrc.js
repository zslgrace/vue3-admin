module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'lines-between-class-members': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    "class-methods-use-this": "off",
    'max-len': 'off',
  },
  // "overrides": [
  //   {
  //     "files": ["*.ts", "*.tsx"],
  //     "rules": {
  //       "@typescript-eslint/explicit-module-boundary-types": ["error"]
  //     }
  //   }
  // ]
};
