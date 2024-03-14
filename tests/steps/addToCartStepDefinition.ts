import {Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber';
import { pageFixture } from '../hooks/pageFixture';
import { Logger } from '../../logger/logger';




When('User clicks the Add to Cart button on the inventory page', async () => {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("User clicks the Add to Cart button on the inventory page");

        pageFixture.cartItemName = await pageFixture.product.addToCart('Sauce Labs Backpack');

        Logger.info("PASSED : add to cart worked ....");

    }catch(error){

        Logger.error("FAILED...add to cart not worked....");
    }

    


})

When('User should see the added product details on inventory page with the corresponding details', async () => {
  // Write code here that turns the phrase above into concrete actions
  
        try{

            Logger.info("User should see the added product details on inventory page with the corresponding details");

            await pageFixture.product.validateDetail(pageFixture.cartItemName);

            Logger.info("PASSED : item is visible after add ....");

        }catch(error){

            Logger.error("FAILED...item not visible ....");
        }

       

})



When('User clicks the cart icon on the inventory page', async() => {
  // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("User clicks the cart icon on the inventory page");

        await pageFixture.cart.clickCartIcon();

        Logger.info("PASSED : cart icon clicked ....");

    }catch(error){

        Logger.error("FAILED...cart icon not clicked ....");
    }
   
})


Then('User will be redirected to the cart page', async() => {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("User will be redirected to the cart page");

        await  pageFixture.cart.assertCartIcon();

        Logger.info("PASSED : user is in cart page ....");

    }catch(error){

        Logger.error("FAILED...user is not in cart page ....");
    }

    
})


Then('User should see the details of the previously added product, including the product name, product description, and product price', async () => {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("'User should see the details of the previously added product");

        await pageFixture.product.validateDetail(pageFixture.cartItemName);

        Logger.info("PASSED : user is seeing the details ....");

    }catch(error){

        Logger.error("FAILED...user is did not found the details ....");
    }

    
  })








