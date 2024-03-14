import { Browser , Page } from "@playwright/test";
import { loginPage } from "../src/pageObjects/loginLocator";
import { productsPage } from "../src/pageObjects/productsLocator"; 
import { cartPage } from "../src/pageObjects/cartLocator"; 
import { checkoutStepOnePage } from "../src/pageObjects/checkoutStepOneLocators";
import { checkoutSteptwoPage } from "../src/pageObjects/checkoutStepTwoLocators";


export const pageFixture = {
    // @ts-ignore

    cartItemName : '',
    page : undefined as Page,
    login : undefined as loginPage,
    product : undefined as productsPage,
    cart : undefined as cartPage,
    checkoutOne: undefined as checkoutStepOnePage,
    checkoutTwo : undefined as checkoutSteptwoPage

}