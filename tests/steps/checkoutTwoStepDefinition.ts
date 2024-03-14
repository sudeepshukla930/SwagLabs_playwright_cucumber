import {When,Then} from '@cucumber/cucumber';

import { pageFixture } from "../hooks/pageFixture";

Then('User should see the details of the previously added product on the checkout step two page, including the product name, product description, and product price', async () => {
    await pageFixture.checkoutTwo.verifyProductDetails();
  });
   
  Then('User should see the details of the previously added product, including the payment information, shipping information, price total, and total', async () => {
    //await overviewPage.verifyOrderDetails();
  });
   
  When('User clicks on the finish button', async () => {
    await pageFixture.checkoutTwo.clickFinishButton();
  });
   
  Then('User should see Thank you for your order page', async () => {
    await pageFixture.checkoutTwo.verifyThankyou();
  });
   
  Then('User clicks back to the home button', async () => {
    await pageFixture.product.clickMenuBarOpen();
    await pageFixture.product.clickYourMenuElement('all items');
  });