module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      spacing: {
        "unit-1": "4px",
        "unit-2": "8px",
        "unit-3": "16px",
        "unit-4": "24px",
        "unit-5": "32px",
        "unit-6": "40px",
        "unit-7": "48px",
        "unit-8": "56px",
      },
      borderRadius: {
        sm: "16px",
        md: "24px",
        lg: " 100px",
      },
      fontSize: {
        xs: "10px",
        sm: "14px",
        md: "16px",
        lg: "24px",
        xl: "30px",
      },
      fontFamily: {
        sans: ["Circular Pro"],
      },
      colors: {
        "purple-60": `#4C00C2`,
        "purple-90": `#32007E`,
        purple: `#3B058E`,
        background: `#E5E5E5`,
        white: `#FFFFFF`,
        "grey-20": `#D3D8E1`,
        "grey-50": `#798291`,
        "grey-70": `#444E5D`,
        "grey-90": `#1A212C`,
        "green-30": `#19AC51`,
        "red-30": `#FC484C`,
        "visa-green": `#01C9C7`,
        "mastercard-purple": `#3B058E`,
      },
    },
  },
  plugins: [],
}
