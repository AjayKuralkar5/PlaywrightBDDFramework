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

const device=process.env.DEVICE||"desktop";

const reportName=process.env.REPORT_NAME || `${browser}-${device}`;

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