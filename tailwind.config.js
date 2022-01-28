const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    "purple-60": `#4C00C2`,
    "purple-90": `#32007E`,
    purple: `#3B058E`,
    background: `#E5E5E5`,
    "grey-20": `#D3D8E1`,
    "grey-50": `#798291`,
    "grey-70": `#444E5D`,
    "grey-90": `#1A212C`,
    "green-30": `#19AC51`,
    "red-30": `#FC484C`,
  },
}