import { Before, After, Status } from "@cucumber/cucumber";
import {Browser , Page , chromium} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { loginPage } from "../src/pageObjects/loginLocator";
import { productsPage } from "../src/pageObjects/productsLocator";
import { cartPage } from "../src/pageObjects/cartLocator";
import { checkoutStepOnePage } from "../src/pageObjects/checkoutStepOneLocators";
import { checkoutSteptwoPage } from "../src/pageObjects/checkoutStepTwoLocators";
const fs = require("fs-extra");


let page:Page;
let browser:Browser;

Before(async function ()  {
  

    browser = await chromium.launch({headless:false});
 
    page = await  browser.newPage();
     
    pageFixture.page = page;

     pageFixture.login = new loginPage( pageFixture.page);
     pageFixture.product = new productsPage( pageFixture.page);
     pageFixture.cart = new cartPage( pageFixture.page);
     pageFixture.checkoutOne = new checkoutStepOnePage(pageFixture.page);
     pageFixture.checkoutTwo = new checkoutSteptwoPage(pageFixture.page);

});

After ( async function ({pickle , result}) {
    
    try {

            let videoPath: string;
            let img: Buffer;
           
            if (result?.status === Status.PASSED) {
                img = await pageFixture.page.screenshot(
                    { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
                //videoPath = await pageFixture.page.video().path();

                await this.attach(
                    img, "image/png"
                );
               
            }

         await  pageFixture.page.close();  
   
        if (browser) {
           
            await browser.close();
        }
       
    } catch (error) {
        console.error("Error occurred during cleanup:", error);
    }
   
})

