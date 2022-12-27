// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": [buildEslintCommand],

  // Format MarkDown and JSON
  // "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};
