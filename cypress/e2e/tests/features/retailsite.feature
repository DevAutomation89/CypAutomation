
Feature: Retail Login

    #Scenario: login with registered retail user
    #  Given the user is on the retail portal
    #  When the user clicks on login
    #  When the user enters valid credintials "emmenuka@gmail.com" and "Menu@9250"
    #  Then the user successfully logged in and landing on the Retailhome page

    # Scenario: Search product (TC9)

    #  Given the user is on the retail portal
    #  When User clicks on products button
    #  Then User will be navigated to all products page successfully
    #  When User enter a "<product>" in the search input
    #  Then searched product is visible

    # Examples:
    #     | product |
    #    | T-shirt |

    Scenario: Search product (TC8)

        Given the user is on the retail portal
        When User clicks on products button
        Then User will be navigated to all products page successfully
        When User enter a "<product>" in the search input
        Then searched product is visible
        And User click on the add to cart button
        Then the item is added to the cart


        Examples:
            | product |
            | T-shirt |







# Scenario: Search category (TC10)
#    Given the user is on the retail portal
#    When User clicks on products button
#   Then User will be navigated to all products page successfully
#   Then the "<subcategory>" is visible under category
#   Examples:
#       | subcategory |
#       | Women       |
#       | Men         |
#       | Kids        |
