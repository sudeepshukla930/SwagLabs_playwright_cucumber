import { expect, type Locator, type Page } from '@playwright/test';


export class checkoutSteptwoPage{

    private  readonly page: Page;

    private readonly cancelButtonLocator : Locator;
    private readonly finishButtonLocator : Locator;
    private readonly invetoryItemName : Locator;
    private readonly invetoryItemDesc : Locator;
    private readonly inventoryItemPrice : Locator


   
    constructor(page: Page){

        this.page = page;
        this.cancelButtonLocator = page.getByText('CANCEL', { exact: true} );
        this.finishButtonLocator = page.getByText('FINISH', { exact: true} );
        this.invetoryItemName = page.locator('.inventory_item_name ').first();
        this.invetoryItemDesc= page.locator('.inventory_item_desc').first();
        this.inventoryItemPrice= page.locator('.inventory_item_price').first();
    }

    
    public async verifyProductDetails(){
        await this.invetoryItemName.waitFor();
        await this.invetoryItemDesc.waitFor();
        await this.inventoryItemPrice.waitFor();
        await expect(this.invetoryItemName).toBeVisible();
        await expect(this.invetoryItemDesc).toBeVisible();
        await expect(this.inventoryItemPrice).toBeVisible();
        const inventory_item_name=  await this.invetoryItemName.innerText();
        const inventory_item_desc=await this.invetoryItemDesc.innerText();
        const inventory_item_price=await this.inventoryItemPrice.innerText();
        expect(inventory_item_name).toContain("Sauce Labs Backpack");
        expect(inventory_item_desc).toContain("laptop and tablet protection");
        expect(inventory_item_price).toContain("29.99");
    }
    
    public async clickFinishButton(){

        await this.finishButtonLocator.click();
        await expect(await this.page.url()).toContain('checkout-complete');

    }

    public async verifyThankyou(){
        await expect(await this.page.url()).toContain('checkout-complete');
    }

    public async clickCancelTwoButton(){

        await this.cancelButtonLocator.click();
    }

   
    

   

  
}

