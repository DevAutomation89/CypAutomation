Feature: Car insurance

  #Scenario: Successful registration with valid details
  #Given the user is on the login page
  # When the user clicks on the register button
  #When the user enters a valid data
  #And the user clicks the create button
  #Then the user should be redirected to the Login page


  # Scenario: login with registered user
  # Given the user is on the login page
  # When the user enters valid "emmenuka@gmail.com" and "Menu@9250"
  # Then the user successfully logged in and landing on the home page

  # Scenario: logout with registered user
  #Given the user is on the home page
  # When the user clicked on logout button
  #Then the user successfully logged out and landed to login page


  Scenario Outline: User requests a car insurance quotation with a breakdown cover
    Given the user is on the login page
    When the user enters valid "emmenuka@gmail.com" and "Menu@9250"
    And the user request a quotation
    When the user enters a valid quotation data for "<cover>" and "<parkingLocation>"
    Then the user clicks the Save Quotation button
    # Then the user get validate message

    Examples:
      | cover    | parkingLocation  |
      | No cover | Public Place     |
      | Roadside | Private Property |
# | At home  |
# | European |


# Scenario Outline: As a Fcx Admin, Create primary cap raise [status=draft]
#  Given '<Admin>' is logged in to FCX 'PXAdmin'
#   And FCX Concierge menu 'Cap-Raises' is pressed
#   And in FCX Admin Cap Raise view, 'Create New Raise' is pressed
#  And in Create New Raise view pop-up, '<Company Name>' is entered into Issuer
#   And in Create New Raise view pop-up, '<Label>' is entered into Label
#   And in Create New Raise view pop-up, '<Raise Type>' is selected for Raise Type
#   And in Create New Raise view pop-up, 'Create' is pressed
#   Then in FCX Admin Cap Raises view table, display details
#     | Issuer         | Raise Type   | Label             | S708     | Creation Date | Status |
#    | <Company Name> | <Raise Type> | Primary Cap Raise | Required | [Today]       | Draft  |

