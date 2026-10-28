import { Locator,Page } from "@playwright/test";

export class BasePage{
    // In Java protected WebDriver driver;
    //Here protected readonly page: Page;
    //protected - Child Page classes can use it
    //readonly -Reference should not accidentally be reassigned
    //page - Playwright browser tab
    protected readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    //Create a method called navigate that accepts a website URL, opens that URL asynchronously, and does not return any value."
    async navigate(url:string):Promise<void>{
        //"Use the current Playwright page to open this URL and wait for the navigation."
        await this.page.goto(url);
    }
     
    //Promise<void> → method runs asynchronously and returns no value.
    async fillText(locator:Locator,value:string): Promise<void>{
        //await locator.fill(value) → waits while Playwright enters the text into that element.
        await locator.fill(value);
    }

    async clickkAction(locator:Locator):Promise<void>{
        await locator.click();
   }

   async getText(locator:Locator): Promise<string>{
    return await locator.innerText();
   }
}