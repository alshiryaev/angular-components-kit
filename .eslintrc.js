module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'new-cap': 0,
    'require-jsdoc': 0,
    'indent': 0,
    'max-len': 0,
  },
  'overrides': [
    {
      'files': ['*.component.html'],
      'parser': '@angular-eslint/template-parser',
      'rules': {
        'max-len': 0,
      },
      'plugins': ['@angular-eslint/template'],
    },
  ],
};
