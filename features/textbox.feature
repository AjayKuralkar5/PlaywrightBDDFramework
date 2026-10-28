@Smoke @UI @TextBox
Feature: DemoQA Text Box functionality

  Scenario Outline: Submit valid Text Box details
    Given User is on DemoQA Text Box page
    And User loads Text Box data for "<TestCaseId>"
    When User enters Full Name
    And User enters Email
    And User enters Current Address
    And User enters Permanent Address
    And User clicks on Submit button
    Then User should see submitted Text Box details

    Examples:
      | TestCaseId |
      | TC002      |