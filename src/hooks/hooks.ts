import{After,Before,Status,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { environment } from "../config/environment";
import { TextBoxPage } from "../pages/TextBoxPage";
import { CustomWorld } from "../support/World";
import { request } from "playwright/test";
import { ApiClient } from "../api/ApiClient";


setDefaultTimeout(60 * 1000);
//UI Before Hook
Before({tags:"@UI"}, async function (this: CustomWorld) {
   this.browser=await chromium.launch({headless:environment.headless});

   this.context=await this.browser.newContext();

   this.page = await this.context.newPage();

   this.page.setDefaultTimeout(environment.defaultTimeout);

   this.textBoxPage=new TextBoxPage(this.page);


})

//  API Before Hook
Before({tags:"@API"}, async function (this:CustomWorld){
this.apiRequest= await request.newContext({
    baseURL:environment.apiBaseUrl,
    extraHTTPHeaders:{
        "Content-Type":
                        "application/json",

                    "Accept":
                        "application/json"
        
    }

});
    this.apiClient=new ApiClient(this.apiRequest);


})



// UI After Hook
After({ tags: "@UI"}, async function(this:CustomWorld, scenario){

    if (scenario.result?.status===Status.FAILED && this.page){
        
        const screenshot=await this.page.screenshot({fullPage:true});
         await this.attach(screenshot,"image/png");
    }

    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
    
    


})

// API After Hook
After({ tags: "@API"}, async function(this:CustomWorld){
    if(this.apiRequest){
        await this.apiRequest.dispose();
    }

});