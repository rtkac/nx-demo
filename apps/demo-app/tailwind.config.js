const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');
const { mauve, violet } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },

    },
  },
  plugins: [],
};
