Feature: Contact page validation
@error

Scenario: Verify contact page mandatory field validation

    Given user is on homepage
    When user clicks on Contact link
    Then user should be navigated to contact page

    When user clicks on submit button without entering details
    Then mandatory field validation errors should be displayed

    When user enters mandatory contact details
    Then mandatory field validation errors should disappear


