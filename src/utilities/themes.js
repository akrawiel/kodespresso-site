export const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT"
};

export const switchTheme = newTheme => {
  const documentStyle = document.documentElement.style;

  switch (newTheme) {
    case THEMES.DARK: {
      documentStyle.setProperty("--bg-light-color", "#3c2a1e");
      documentStyle.setProperty("--bg-dark-color", "#1a120d");
      documentStyle.setProperty("--bg-darker-color", "#0d0906");
      documentStyle.setProperty("--fg-normal-color", "#e2d0c3");
      documentStyle.setProperty("--fg-highlight-color", "#a6aeec");
      break;
    }
    case THEMES.LIGHT: {
      documentStyle.setProperty("--bg-light-color", "#e2d0c3");
      documentStyle.setProperty("--bg-dark-color", "#c8a78e");
      documentStyle.setProperty("--bg-darker-color", "#bb9274");
      documentStyle.setProperty("--fg-normal-color", "#503f35");
      documentStyle.setProperty("--fg-highlight-color", "#000");
      break;
    }
  }
};
