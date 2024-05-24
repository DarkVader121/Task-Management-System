const withMT = require("@material-tailwind/react/utils/withMT");

const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#FFD28A", // Define the custom color here
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      typography: {
        fontFamily: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};

const materialTailwindConfig = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

// Merge the two configurations
const combinedConfig = {
  content: [...tailwindConfig.content, ...materialTailwindConfig.content],
  theme: { ...tailwindConfig.theme, ...materialTailwindConfig.theme },
  plugins: [...tailwindConfig.plugins, ...materialTailwindConfig.plugins],
};

module.exports = combinedConfig;