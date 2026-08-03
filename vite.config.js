import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/BrewNest/",

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        distributors: resolve(__dirname, "distributors.html"),
        coffee: resolve(__dirname, "coffee.html"),
        cappuccino: resolve(__dirname, "cappuccino.html"),
        "turkish-coffee": resolve(__dirname, "turkish-coffee.html"),
      },
    },
  },
});
