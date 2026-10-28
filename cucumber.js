module.exports = {
  default: {
    requireModule: [
      "ts-node/register"
    ],

    require: [
      "src/support/**/*.ts",
      "src/hooks/**/*.ts",
      "src/stepDefinitions/**/*.ts"
    ],

    paths: [
      "features/**/*.feature"
    ],

    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ]
  }
};