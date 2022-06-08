module.exports = {
  presets: ["@react/cli-plugin-babel/preset"],
  env: {
    test: {
      plugins: ["transform-require-context"],
    },
  },
}