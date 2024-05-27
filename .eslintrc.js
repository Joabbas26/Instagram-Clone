module.exports = {
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/jsx-runtime',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: [
    'react',
    'react-refresh',
    'react/recommended'],
    "rules": {
      "react/react-in-jsx-scope": "error",
      "no-unused-vars" : [
        "error",
        {
          "varsIgnorePattern": "React"
        }
      ],
      'react/prop-types': 'off',
      "react/jsx-uses-react": "error",   
     "react/jsx-uses-vars": "error" ,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }