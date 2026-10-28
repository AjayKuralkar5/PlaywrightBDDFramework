import {
    Given,
    Then,
    When
} from "@cucumber/cucumber";

import {
    expect
} from "@playwright/test";

import {
    CustomWorld
} from "../support/World";

import {
    ApiConstants
} from "../api/ApiConstants";

import apiTestData
    from "../testData/apiTestData.json";

    // Verify API availability

    Given("API service is available", async function (this:CustomWorld){
        const response=await this.apiClient.get(ApiConstants.OBJECTS);
        expect(response.ok()).toBeTruthy();

    });

    //// GET all objects
    When("User requests the list of all objects", async function(this:CustomWorld){
        this.apiResponse=await this.apiClient.get(ApiConstants.OBJECTS);

    });

    Then("Object list should not be empty", async function(this:CustomWorld){
        const responseBody= await this.apiResponse.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);

    });

    // POST object
    When("User creates a new object", async function(this:CustomWorld){
        this.apiResponse=await this.apiClient.post(ApiConstants.OBJECTS, apiTestData.createObject)
        const responseBody=await this.apiResponse.json();
        this.createdObjectId=responseBody.id;
        expect(this.createdObjectId).toBeTruthy();


    });

    Then("Created object should contain expected details",async function (this: CustomWorld) {

        const responseBody =await this.apiResponse.json();


        expect(responseBody.name).toBe(apiTestData.createObject.name);


        expect(responseBody.data.year).toBe(apiTestData.createObject.data.year);


        expect(responseBody.data.price).toBe(apiTestData.createObject.data.price);
    }
);


// Common status validation

Then("API response status should be {int}",async function (this: CustomWorld,expectedStatus: number
)
    {

        expect(this.apiResponse.status()).toBe(expectedStatus);
    }
);


// GET created objectS

When("User retrieves the created object",async function (this: CustomWorld) {

        this.apiResponse = await this.apiClient.get( `${ApiConstants.OBJECTS}/${this.createdObjectId}`);
    }
);


Then( "Retrieved object should contain created object ID",async function (this: CustomWorld
    ) {

        const responseBody =await this.apiResponse.json();


        expect(responseBody.id).toBe(this.createdObjectId);


        expect(responseBody.name).toBe(apiTestData.createObject.name);
    }
);


// PUT complete update

When("User updates the created object",async function (this: CustomWorld) {

        this.apiResponse =
            await this.apiClient.put(`${ApiConstants.OBJECTS}/${this.createdObjectId}`,apiTestData.updateObject);
    }
);


Then("Updated object should contain expected details", async function (this: CustomWorld) {

        const responseBody =await this.apiResponse.json();


        expect(responseBody.name).toBe(apiTestData.updateObject.name);


        expect(responseBody.data.price).toBe(apiTestData.updateObject.data.price);
    }
);


// PATCH partial update

When("User partially updates the created object",async function (this: CustomWorld) {
        this.apiResponse =await this.apiClient.patch( `${ApiConstants.OBJECTS}/${this.createdObjectId}`,apiTestData.patchObject);
    }
);


Then("Patched object should contain expected name",async function (this: CustomWorld) {

        const responseBody =await this.apiResponse.json();


        expect(responseBody.name).toBe(apiTestData.patchObject.name);
    }
);


// DELETE object

When("User deletes the created object",async function (this: CustomWorld) {

        this.apiResponse =await this.apiClient.delete( `${ApiConstants.OBJECTS}/${this.createdObjectId}` );
    }
);


Then("Delete response should contain confirmation message",async function (this: CustomWorld) {

        const responseBody =await this.apiResponse.json();


        expect(responseBody.message).toContain(this.createdObjectId);
    }
);
