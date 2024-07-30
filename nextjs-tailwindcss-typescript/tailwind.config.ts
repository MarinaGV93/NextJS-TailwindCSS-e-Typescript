import type { Config } from "tailwindcss";

const config: Config = {
  // Analisa todo o projeto e olhe para os arquivos que estão nesse caminho, terminando com essas extensoes
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
