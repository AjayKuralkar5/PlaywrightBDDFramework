export type BrowserName="chromium"| "firefox"| "webkit";

export type DeviceName="desktop"|"pixel5"|"iphone13"|"galaxyA55";

const configureBrowser=
(
    process.env.BROWSER?? "chromium"
).toLowerCase();

const configureDevice=
(
    process.env.DEVICE?? "desktop"
);

function isBrowserName(
    browser:string
): browser is BrowserName{
    return[
        "chromium",
        "firefox",
        "webkit"
    ].includes(browser)
}

function isdDeviceName(
    device: string
): device is DeviceName{
    return[
        "desktop",
        "pixel5",
        "iphone13",
        "galaxyA55"
    ].includes(device);
}

if(!isBrowserName(configureBrowser)){
    throw new Error(
        `Unsupported browser: ${configureBrowser}.`+
        "Supported browsers are chromium, firefox, and webkit"

    );
}

if(!isdDeviceName(configureDevice)){
    throw new Error(
        `Unsupported device:${configureDevice}. `+
        "Use desktop, pixel5, iphone13 or galaxyA55."
    );

}

export const environment ={
    baseurl:"https://demoqa.com",
    apiBaseUrl: "https://api.restful-api.dev",
    browser:configureBrowser,
    device:configureDevice,
    headless:
    process.env.HEADLESS
    ?process.env.HEADLESS==="true"
    :process.env.CI ==="true",

    defaultTimeout: 30000

    

};