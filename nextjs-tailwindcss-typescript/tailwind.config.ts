import type { Config } from "tailwindcss";

const config: Config = {
  // Analisa todo o projeto e olhe para os arquivos que estão nesse caminho, terminando com essas extensoes
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // Configuração de tema
  theme: {
    // Exterder o tema
    extend: {
      // Em cores
      colors: {
        // Declarando as cores
        text: "var(--color-text)",
        error: "var(--color-error)",
        paper: "var(--color-paper)",
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        "primary-contrast": "var(--color-primary-contrast)",
      },
    },
  },
  plugins: [],
};
export default config;
