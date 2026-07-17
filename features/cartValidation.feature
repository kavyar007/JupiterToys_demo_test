Feature: Shopping cart validation


@cart
Scenario: Verify cart subtotal and total calculation

    Given user is on homepage
    When user navigates to shop page
    And user buys 2 Stuffed Frog, 5 Fluffy Bunny and 3 Valentine Bear
    And user navigates to cart page
    Then product prices should be correct
    And product subtotals should be correct
    And cart total should equal sum of subtotals