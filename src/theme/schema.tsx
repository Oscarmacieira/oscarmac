import { colorPalette, typography } from "./style-guide";

const themes = {
  data: {
    light: {
      id: "T_001",
      name: "Light",
      palette: colorPalette.lightMode,
      colors: {
        body: colorPalette.lightMode.primary,
        text: colorPalette.lightMode.secondary,
        button: {
          text: "#FFFFFF",
          background: "#000000",
        },
        link: {
          text: "teal",
          opacity: 1,
        },
      },
      font: typography.text,
    },
    dark: {
      id: "T_002",
      name: "Dark",
      palette: colorPalette.darkMode,
      colors: {
        body: colorPalette.darkMode.primary,
        text: colorPalette.darkMode.contrast,
        button: {
          text: colorPalette.darkMode.secondary,
          background: colorPalette.darkMode.primary,
        },
        link: {
          text: colorPalette.darkMode.secondary,
          opacity: 1,
        },
        select: {
          "&:before": {
            borderColor: "red",
          },
        },
      },
      font: typography.text,
    },
  },
  default: "dark",
};

export default themes;
