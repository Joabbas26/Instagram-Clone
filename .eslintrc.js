module.exports = {
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended'
    ],
    "plugins": ["react"],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh',
    'react/recommended'],
    "rules": {
      "react/react-in-jsx-scope": "error",
      "no-unused-vars" : [
        "error",
        {
          "varsIgnorePattern": "React"
        }
      ],
      "react/jsx-uses-react": "error",   
     "react/jsx-uses-vars": "error" ,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }