import collanaEslintConfig from "@collana-solutions/eslint-config";
import storybook from "eslint-plugin-storybook";

export default [
  {
    // scripts/ holds release tooling taken from the release playbook and kept in sync with it.
    ignores: ["**/cypress/", "**/storybook-static/", "scripts/"],
  },
  ...collanaEslintConfig.configs.flat["react-library"],
  ...storybook.configs["flat/recommended"],
  {
    // The shared config wants PascalCase component files. eslint-plugin-unicorn applies the case to
    // every directory in the path by default, which would mean renaming src/ and lib/ as well.
    files: ["**/components/**/*.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "pascalCase", checkDirectories: false }],
    },
  },
  {
    files: [".storybook/**/*.ts", ".storybook/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
  },
];
