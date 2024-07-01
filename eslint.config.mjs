import globals from "globals";
import react from "eslint-plugin-react";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { react },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },
        rules: {
            "react-in-jsx-scope": "off",
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
