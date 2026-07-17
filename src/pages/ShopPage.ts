import { Locator, Page } from "@playwright/test";
import { Basepage } from "./BasePage";


export class ShopPage extends Basepage {


private readonly buyButtons: Locator;


constructor(page:Page){

super(page);


this.buyButtons =
page.locator('.product .btn-success');

}

async buyProduct(productName: string, quantity: number) {

    console.log("Buying:", productName);

    const product = this.page
        .locator(".product")
        .filter({ hasText: productName });

    console.log("Products found:", await product.count());

    const buyLink = product.getByRole("link", { name: "Buy" });

    console.log("Buy links:", await buyLink.count());

    for (let i = 0; i < quantity; i++) {
        console.log(`Click ${i + 1}`);
        await buyLink.click();
    }
}}