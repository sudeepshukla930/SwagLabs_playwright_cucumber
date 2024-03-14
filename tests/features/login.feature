Feature: Verify valid Swag Labs login functionalities

Background:
    Given User has opened Swag Labs on the browser

  Scenario: Validate valid Login
  
    When User enters valid username and password

    And User clicks the login button 

    Then Swag Labs title is displayed at the top of the page

   
   Scenario: Validate invalid Login
  
    When User enters invalid username and password

    And User clicks the login button 

    Then Showing Epic sad face: Sorry, this user has been locked out 


   Scenario: Verify problem Swag Labs login

    When User enters problem username and password

    And User clicks the login button 

    Then The image is not shown up