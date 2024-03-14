import {Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber';
import { loginPage } from '../src/pageObjects/loginLocator';
import { pageFixture } from '../hooks/pageFixture';
import { Logger } from '../../logger/logger';

setDefaultTimeout(50000);

let count : number = 0


Given('User has opened Swag Labs on the browser', async function () {     
    // Write code here that turns the phrase above into concrete actions  
   
   
    try{

        Logger.info("User has opened Swag Labs on the browser");
        await pageFixture.login.goToLoginPage();

    }catch(error){
        Logger.error("User has  not able to opened Swag Labs on the browser");
    }
   

    
  });


  When('User enters valid username and password', async function () {       
    // Write code here that turns the phrase above into concrete actions    
   
    try{

        Logger.info("User enters valid username and password");

        await pageFixture.login.enterCredential();

        Logger.info("entered credentials");

    }catch(error){
        Logger.error("User unable enters valid username and password");
    }
    
    

  });

  When('User enters invalid username and password', async function (){


    try{

        Logger.info("User enters invalid username and password");

        await pageFixture.login.enterICredential();

        Logger.info("entered credentials");

    }catch(error){

        Logger.error("User unable enters invalid username and password");
    }

    
   
    
  })

  When('User enters problem username and password', async function () {       
    // Write code here that turns the phrase above into concrete actions  
    
    try{

        Logger.info("User enters problem username and password");

        await pageFixture.login.enterPCredential();

        Logger.info("entered credentials");

    }catch(error){

        Logger.error("User unable enters username and password");
    }



  });


  When('User clicks the login button', async function () {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("User clicks the login button");

        await pageFixture.login.loginButtonClicked();

        Logger.info("login button clicked");

    }catch(error){

        Logger.error("User unable to click the login button");
    }

   
   

  });


  Then('Swag Labs title is displayed at the top of the page', async function () {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("Swag Labs title should displayed at the top of the page");

        await pageFixture.login.assertLogin();

        Logger.info("PASSED : title displaying ....");

    }catch(error){

        Logger.error("FAILED...title not there....");
    }

   
    

  });

  Then('Showing Epic sad face: Sorry, this user has been locked out', async function () {
    // Write code here that turns the phrase above into concrete actions
    
    try{

        Logger.info("Should show Epic sad face: Sorry, this user has been locked out");

        await pageFixture.login.visibleErrorButton();

        Logger.info("PASSED : error message displaying ....");

    }catch(error){

        Logger.error("FAILED...error message  not there....");
    }


   
  

  });

  Then('The image is not shown up', async function () {
    // Write code here that turns the phrase above into concrete actions

    try{

        Logger.info("The image should not shown up");

        await pageFixture.login.imageValidate();

        Logger.info("PASSED : image is not showing ....");

    }catch(error){

        Logger.error("FAILED...image is showing....");
    }


    
   

  });





  