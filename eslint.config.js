import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
    }
  },
  {
    languageOptions: { 
      globals: { 
        ...globals.browser,
        ...globals.node
      } 
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    files: ['functions/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    rules:{
      "no-unused-vars": "off",
    }
  }
];
