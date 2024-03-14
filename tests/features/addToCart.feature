Feature: Swag Labs Add One Product Functionality

  Background:
    Given User has opened Swag Labs on the browser
    

  Scenario: Add one product to the cart page
   
    When User enters valid username and password
    And User clicks the login button 
    Then Swag Labs title is displayed at the top of the page
    When User clicks the Add to Cart button on the inventory page
    And User should see the added product details on inventory page with the corresponding details
    When User clicks the cart icon on the inventory page
    Then User will be redirected to the cart page
    And User should see the details of the previously added product, including the product name, product description, and product price

  
