Feature: Swag Labs Checkout Step Two Functionality
 
 Background: 
      Given User has opened Swag Labs on the browser

  Scenario Outline: Verify Checkout Step Two
    
    When User enters valid username and password
    And User clicks the login button 
    Then Swag Labs title is displayed at the top of the page
    When User clicks the Add to Cart button on the inventory page
    And User should see the added product details on inventory page with the corresponding details
    When User clicks the cart icon on the inventory page
    Then User will be redirected to the cart page
    And User should see the details of the previously added product, including the product name, product description, and product price
    And User clicks on the checkout button
    And User should be redirected to the checkout page
    And User fills out the first name "<first_name>" form
    And User fills in the last name "<last_name>" form
    And User fills out the postal code "<postal_code>" form
    And User clicks the continue button
    Then User will be redirected to the checkout overview page
    And User should see the details of the previously added product on the checkout step two page, including the product name, product description, and product price
    And User should see the details of the previously added product, including the payment information, shipping information, price total, and total
    And User clicks on the finish button
    And User should see Thank you for your order page
    And User clicks back to the home button

    Examples:
     |first_name | last_name | postal_code |
     | Test       | Data       | 12345       |
 
    