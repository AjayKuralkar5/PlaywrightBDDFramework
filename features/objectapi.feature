@API @Regression
Feature: Objects API CRUD operations

  Scenario: Verify complete CRUD operation for an object

    Given API service is available

# GET ALL
    When User requests the list of all objects
    Then API response status should be 200
    And Object list should not be empty

    # POST request
    When User creates a new object
    Then API response status should be 200
    And Created object should contain expected details

    # GET BY ID
    When User retrieves the created object
    Then API response status should be 200
    And Retrieved object should contain created object ID

    # PUT request
    When User updates the created object
    Then API response status should be 200
    And Updated object should contain expected details

    # PATCH request
    When User partially updates the created object
    Then API response status should be 200
    And Patched object should contain expected name

    # DELETE request
    When User deletes the created object
    Then API response status should be 200
    And Delete response should contain confirmation message