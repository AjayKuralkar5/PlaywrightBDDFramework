import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/World";
import { getTextBoxData, TextBoxData } from "../utils/dataReader";

Given("User is on DemoQA Text Box page", async function(this:CustomWorld){

    await this.textBoxPage.open();
}

);

Given("User loads Text Box data for {string}", async function (this: CustomWorld, testCaseId: string) 
    {
        
        this.testData=getTextBoxData(testCaseId);
    }
    
);

When("User enters Full Name", async function(this:CustomWorld)
{
    await this.textBoxPage.enterFullName(this.testData.fullName);
}

);

When("User enters Email", async function(this:CustomWorld)
{
    await this.textBoxPage.enterEmailAddress(this.testData.email);
}

);

When("User enters Current Address", async function(this:CustomWorld)
{
    await this.textBoxPage.enterCurrentAddress(this.testData.currentAddress);
}
);

When ("User enters Permanent Address",async function(this:CustomWorld)
{
    await this.textBoxPage.enterPermanentAddress(this.testData.permanentAddress);
}
);

When("User clicks on Submit button",async function(this:CustomWorld)
{
    await this.textBoxPage.clickSubmitButton();
}
);

Then("User should see submitted Text Box details",async function(this:CustomWorld)
{
   await this.textBoxPage.verifySubmittedDetails(
    this.testData.fullName,
    this.testData.email,
    this.testData.currentAddress,
    this.testData.permanentAddress
    );
}
);