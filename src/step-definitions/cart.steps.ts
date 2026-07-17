import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { ShopPage } from "../pages/ShopPage";
import { CartPage } from "../pages/CartPage";
import { homePage } from "./contactNavigation.steps";

let shopPage: ShopPage;
let cartPage: CartPage;

When(
"user navigates to shop page",
async()=>{

    console.log("Before clickShop");

    await homePage.clickShop();

    console.log("After clickShop");

    shopPage = new ShopPage(pageFixture.page);

    console.log("ShopPage created");

});


When(
    "user buys 2 Stuffed Frog, 5 Fluffy Bunny and 3 Valentine Bear",
    async () => {

        await shopPage.buyProduct("Stuffed Frog", 2);
        await shopPage.buyProduct("Fluffy Bunny", 5);
        await shopPage.buyProduct("Valentine Bear", 3);

    }
);

When(
"user navigates to cart page",
async()=>{

    await pageFixture.page
        .locator('a[href="#/cart"]')
        .click();

    await pageFixture.page.waitForURL("**/#/cart");

    cartPage = new CartPage(pageFixture.page);

});

    
Then(
    "product prices should be correct",
    async () => {

        await cartPage.verifyPrices();

    }
);

Then(
    "product subtotals should be correct",
    async () => {

        await cartPage.verifySubTotals();

    }
);

Then(
    "cart total should equal sum of subtotals",
    async () => {

        await cartPage.verifyTotal();

    }
);