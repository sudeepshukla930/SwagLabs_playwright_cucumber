import {When,Then} from '@cucumber/cucumber';

import { pageFixture } from "../hooks/pageFixture";

import { Logger } from '../../logger/logger';

When('User clicks on the checkout button', async () => {

    try{

        Logger.info("User clicks on the checkout button");

        await pageFixture.cart.clickCheckoutButton();

        Logger.info("PASSED : user clicked checkout button ....");

    }catch(error){

        Logger.error("FAILED...user unable to clicked ....");
    }
    
  });
   
  Then('User should be redirected to the checkout page', async () => {
    
    try{

        Logger.info("User should be redirected to the checkout page");

        await pageFixture.cart.assertCheckoutOne();

        Logger.info("PASSED : user is in checkout one page ....");

    }catch(error){

        Logger.error("FAILED...user is not checkout one page ....");
    }

    
  });
   
  When('User fills out the first name {string} form', async (firstName: string) => {

    try{

        Logger.info("User fills out the first name {string} form");

        await pageFixture.checkoutOne.enterFirstName(firstName);

        Logger.info("PASSED :  ....");

    }catch(error){

        Logger.error("FAILED...user is not checkout one page ....");
    }

   
    
  });
   
  When('User fills in the last name {string} form', async (lastName: string) => {
    try{

        Logger.info("User fills out the last name {string} form");

        await pageFixture.checkoutOne.enterLastName(lastName);

        Logger.info("PASSED :  ....");

    }catch(error){

        Logger.error("FAILED...user is not checkout one page ....");
    }
    
  });
   
  When('User fills out the postal code {string} form', async (postalCode: string) => {
   
    try{

        Logger.info("User fills out the zip {string} form");

        await pageFixture.checkoutOne.enterZip(postalCode);

        Logger.info("PASSED :  ....");

    }catch(error){

        Logger.error("FAILED...user is not checkout one page ....");
    }
   
  });
   
  When('User clicks the continue button', async () => {
    await pageFixture.checkoutOne.clickContinueButton();
  });
   
  Then('User will be redirected to the checkout overview page', async () => {
    await pageFixture.checkoutOne.assertCheckoutTwo();
  });