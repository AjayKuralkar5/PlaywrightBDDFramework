//World is the scenario context.
//It holds the objects required by the current Cucumber scenario:

import {
    World,
    IWorldOptions,
    setWorldConstructor
} from "@cucumber/cucumber";

import type {
    Browser,
    BrowserContext,
    Page
} from "playwright";

import type{
    APIRequestContext,
    APIResponse
} from "@playwright/test"

import type {
    TextBoxPage
} from "../pages/TextBoxPage";

import type {
    TextBoxData
} from "../utils/dataReader";

import type{
    ApiClient
} from "../api/ApiClient";
//we keep scenario-specific objects in CustomWorld
//This will also make the framework better prepared for parallel execution later.
export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    
    textBoxPage!: TextBoxPage;
    testData!: TextBoxData;

    // API objects
    apiRequest!:APIRequestContext;
    apiClient!:ApiClient;
    apiResponse!:APIResponse;
    createdObjectId!:string;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);