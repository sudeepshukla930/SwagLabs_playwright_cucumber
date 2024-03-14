import { expect, type Locator, type Page } from '@playwright/test';

import {base} from '../data/data.json'; 

export class loginPage{

    private  readonly page: Page;
    private readonly usernameLocator:Locator;
    private readonly passwordLocator:Locator;
    private readonly loginButtonLocator:Locator;
    private readonly errorButton : Locator;
    private readonly imageLocator : Locator

    constructor(page: Page){

        this.page = page;
        this.usernameLocator = page.getByPlaceholder('Username');
        this.passwordLocator = page.getByPlaceholder('Password');
        this.loginButtonLocator = page.locator('#login-button');
        this.errorButton= page.locator('h3') ;
        this.imageLocator = page.locator('img.inventory_item_img').first();

    }

    
    public async goToLoginPage(){
        console.log(base);
        await this.page.goto(base.url);
    }

    public async enterCredential(){
        
        await this.usernameLocator.waitFor();
        await this.usernameLocator.fill(base.username);

        await this.passwordLocator.waitFor();
        await this.passwordLocator.fill(base.password);
        
    }

    public async enterICredential(){
        
        await this.usernameLocator.waitFor();
        console.log("inside invalid.........")
        await this.usernameLocator.fill('locked_out_user');

        await this.passwordLocator.waitFor();
        await this.passwordLocator.fill(base.password);
        
    }

    public async enterPCredential(){
        
        await this.usernameLocator.waitFor();
        await this.usernameLocator.fill('problem_user');

        await this.passwordLocator.waitFor();
        await this.passwordLocator.fill(base.password);
        
    }

    public async loginButtonClicked(){

        await this.loginButtonLocator.waitFor();
        await this.loginButtonLocator.click();

    }

   

    public async assertLogin(){

        await this.page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        await expect(this.page.url()).toContain('inventory');
        
    }

    public async visibleErrorButton() {
        // await this.errorButton.waitFor();
        // expect(await this.errorButton).toBeVisible();
       const text =  await this.errorButton.innerText();
       expect(text).toContain('Epic sadface');
        // console.log("**********************");
      }


      public async imageValidate() {
      
        const img  = await this.imageLocator.getAttribute('src');
        console.log(img);

        expect(img).toContain('WithGarbage');

        
      }

}

