import {expect, Locator,Page } from "playwright/test";
import { BasePage } from "./BasePage";
import { environment } from "../config/environment";

export class TextBoxPage extends BasePage{

    private readonly fullNameInput: Locator;

    private readonly emailInput: Locator;

    private readonly currentAddressInput: Locator;

    private readonly permanentAddressInput: Locator;

    private readonly submitButton: Locator;

    private readonly outputName: Locator;

    private readonly outputEmail: Locator;

    private readonly outputCurrentAddress: Locator;

    private readonly outputPermanentAddress: Locator;

    constructor(page:Page){
        super(page);

        this.fullNameInput=page.locator("#userName");

        this.emailInput=page.locator("#userEmail");

        this.currentAddressInput=page.locator("#currentAddress");

        this.permanentAddressInput=page.locator("#permanentAddress");

        this.submitButton=page.locator("#submit");

        this.outputName=page.locator("#output #name");

        this.outputEmail=page.locator("#output #email");

        this.outputCurrentAddress=page.locator("#output #currentAddress");

        this.outputPermanentAddress=page.locator("#output #permanentAddress");
      
    }

    async open(): Promise<void>{
        await this.navigate(`${environment.baseurl}/text-box`);
    }

    async enterFullName(fullName: string):Promise<void>{
        await this.fillText(this.fullNameInput, fullName);
    }

    async enterEmailAddress(emailAdd: string):Promise<void>{
        await this.fillText(this.emailInput, emailAdd);
    }

    async enterCurrentAddress(currrentAdd: string):Promise<void>{
        await this.fillText(this.currentAddressInput, currrentAdd );
    }

    async enterPermanentAddress(PermanetAdd: string):Promise<void>{
        await this.fillText(this.permanentAddressInput, PermanetAdd );

    }

    async clickSubmitButton():Promise<void>{
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.clickkAction(this.submitButton);
    }

    async verifySubmittedDetails(fullName:string, email:string, currentAddress:string, permanentAddress:string):Promise<void>{
        await expect(this.outputName).toContainText(fullName);
        await expect(this.outputEmail).toContainText(email);
        await expect(this.outputCurrentAddress).toContainText(currentAddress);
        await expect(this.outputPermanentAddress).toContainText(permanentAddress);

    }


}