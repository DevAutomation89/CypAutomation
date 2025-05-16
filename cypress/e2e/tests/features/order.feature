Feature: Retail Order

    # Scenario:  registered retail user placed an order

    #  Given the user is on the retail portal
    # When User clicks on products button
    # Then User will be navigated to all products page successfully
    # When User enter a "<product1>" in the search input
    #  Then searched "<product1>" is visible
    # And User click on the add to cart button
    #  Then the item is added to the cart
    #  Then the user clicks on the continue button
    #  And the user clicks on the cart button


    #  Examples:
    #      | product1 |
    #      | T-Shirt  |
    #      | Dress    |

    Scenario:  add two products to cart

        Given the user is on the retail portal
        When User clicks on products button
        Then User will be navigated to all products page successfully
        When User enter a "<product1>" in the search input
        Then searched "<product1>" is visible
        And User click on the add to cart button
        Then the item is added to the cart
        Then the user clicks on the continue button
        When User clicks on products button
        When User enter a "<product2>" in the search input
        Then searched "<product2>" is visible
        And User click on the add to cart button
        Then the user clicks on the continue button
        And the user clicks on the cart button


        Examples:
            | product1 | product2 |
            | T-Shirt  | Dress    |

