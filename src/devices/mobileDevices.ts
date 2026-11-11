import {
    devices
} from "@playwright/test";

import type {
    BrowserContextOptions
} from "@playwright/test";


export type DeviceName =
    "desktop"
    | "iphone13"
    | "pixel5"
    | "galaxyA55";


export function getDeviceConfig(
    deviceName: DeviceName
): BrowserContextOptions {

    switch (deviceName) {

        case "iphone13": {

            const iphone =
                devices["iPhone 13"];

            if (!iphone) {

                throw new Error(
                    "Playwright device 'iPhone 13' was not found"
                );
            }

            return {
                ...iphone
            };
        }


        case "pixel5": {

            const pixel =
                devices["Pixel 5"];

            if (!pixel) {

                throw new Error(
                    "Playwright device 'Pixel 5' was not found"
                );
            }

            return {
                ...pixel
            };
        }


        case "galaxyA55":

            return {

                viewport: {
                    width: 360,
                    height: 800
                },

                screen: {
                    width: 360,
                    height: 800
                },

                deviceScaleFactor: 3,

                isMobile: true,

                hasTouch: true
            };


        case "desktop":

        default:

            return {

                viewport: {
                    width: 1920,
                    height: 1080
                },

                isMobile: false,

                hasTouch: false
            };
    }
}


// import { devices } from "playwright";
// import type { BrowserContextOptions } from "playwright";
// export type DeviceName="desktop"|"pixel7"|"iphone13"|"galaxyA55";

// export const mobileDevices:
// Record<string, BrowserContextOptions>={
//     desktop:{
//         viewport:{
//             width:1920,
//             height:1080
//         }
//     },

//     pixel7:{
//         ...devices["pixel 7"]
        
//     },

//     iphone13:{
//         ...devices["iphone 13"]
//     },

//     galaxyA55:{

//         viewport:{
//             width: 360,
//             height:800

//         },
//          screen:{
//             width:360,
//             height:800
//          },

//          deviceScaleFactor:3,
//          isMobile: true,
//          hasTouch: true,
         


//     }
// }