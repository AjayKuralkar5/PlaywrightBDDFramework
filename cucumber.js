// module.exports = {
//   default: {
//     requireModule: [
//       "ts-node/register"
//     ],

//     require: [
//       "src/support/**/*.ts",
//       "src/hooks/**/*.ts",
//       "src/stepDefinitions/**/*.ts"
//     ],

//     paths: [
//       "features/**/*.feature"
//     ],

//     format: [
//       "progress",
//       "html:reports/cucumber-report.html"
//     ]
//   }
// };

const browser=process.env.BROWSER ||"chromium";

const reportName=process.env.REPORT_NAME ||"browser";

module.exports={
  default:{
    requireModule:[
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

            `html:reports/cucumber-report-${reportName}.html`
        ]

  }
}