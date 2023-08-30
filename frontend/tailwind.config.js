/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-300": "#a1a9b8",
        "blue-500": "#2264e5",
        "gray-700": "#464f60",
        "gray-900": "#171c26",
        "gray-0": "#f7f9fc",
        "gray-500": "#687182",
        "gray-50": "#e9edf5",
        "gray-600": "#5a6376",
        "red-0": "#faf0f3",
        "red-500": "#d12953",
        "green-0": "#e1fcef",
        "green-500": "#14804a",
        "indigo-0": "#f0f1fa",
        "indigo-500": "#4f5aed",
        gainsboro: "#d9d9d9",
        ivory: {
          "100": "#fffbeb",
          "200": "rgba(255, 251, 235, 0.75)",
        },
        darkslateblue: {
          "100": "#263159",
          "200": "#251749",
        },
        ghostwhite: "rgba(244, 247, 252, 0.75)",
        whitesmoke: "#f9fafc",
        steelblue: "#495579",
      },
      fontFamily: {
        "body-b2": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
      },
    },
    fontSize: {
      sm: "14px",
      "2xs": "11px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
