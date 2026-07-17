Feature: Contact page successful submission
@success

Scenario Outline: Verify successful contact form submission with different users

    Given user is on homepage
    When user clicks on Contact link
    Then user should be navigated to contact page
    When user enters contact details "<forename>" "<surname>" "<email>" "<telephone>" "<message>"
    And user clicks on submit button
    Then successful submission message should be displayed

    Examples:

      | forename | surname | email                    | telephone | message              |
      | John     | Smith   | john.smith@test.com      | 111111111 | Test message one     |
      | Sarah    | Brown   | sarah.brown@test.com     | 222222222 | Test message two     |
      | David    | Wilson  | david.wilson@test.com    | 333333333 | Test message three   |
      | Emma     | Taylor  | emma.taylor@test.com     | 444444444 | Test message four    |
      | Michael  | Jones   | michael.jones@test.com   | 555555555 | Test message five    |