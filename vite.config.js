import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Alvarojohansen.github.io/My-portfolio",
  plugins: [react()],
});
