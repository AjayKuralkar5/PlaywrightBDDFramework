export type BrowserName="chromium"| "firefox"| "webkit";

const configureBrowser=
(
    process.env.BROWSER?? "chromium"
).toLowerCase();

function isBrowserName(
    browser:string
): browser is BrowserName{
    return[
        "chromium",
        "firefox",
        "webkit"
    ].includes(browser)
}

if(!isBrowserName(configureBrowser)){
    throw new Error(
        `Unsupported browser: ${configureBrowser}.`+
        "Supported browsers are chromium, firefox, and webkit"

    );
}

export const environment ={
    baseurl:"https://demoqa.com",
    apiBaseUrl: "https://api.restful-api.dev",
    browser:configureBrowser,
    headless:
    process.env.HEADLESS
    ?process.env.HEADLESS==="true"
    :process.env.CI ==="true",

    defaultTimeout: 30000

    

};