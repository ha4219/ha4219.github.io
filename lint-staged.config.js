// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const buildEslintCommand = (filenames) =>
  `yarn jest ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.test.(ts|tsx)": [buildEslintCommand],

  // Format MarkDown and JSON
  // "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};
