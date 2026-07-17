module.exports = {
  default: {
    paths: [
      "features/**/*.feature"
    ],
    require: [
      "src/step-definitions/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress"
    ]
  }
};