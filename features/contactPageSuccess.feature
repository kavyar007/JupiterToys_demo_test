Feature: Contact page successful submission
@success

Scenario: Verify successful contact form submission

    Given user is on homepage
    When user clicks on Contact link
    Then user should be navigated to contact page
    When user enters mandatory contact details
    And user clicks on submit button
    Then successful submission message should be displayed