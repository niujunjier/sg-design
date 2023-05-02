const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");

module.exports = defineConfig({
  configFile: false,
  plugins: [vue()],
  server: {
    port: 1337,
    open: true,
  },
});
