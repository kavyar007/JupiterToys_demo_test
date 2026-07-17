import { Locator, Page } from "@playwright/test";
import { Basepage } from "./BasePage";
import { ConfigManager } from "../config/configManager";

export class HomePage extends Basepage{
    private readonly contactLink: Locator;
    private readonly shopLink: Locator;

    constructor (page: Page){
        super(page);
        this.contactLink =
            page.locator('a[href="#/contact"]');

        this.shopLink = 
         this.shopLink = page.locator('a[href="#/shop"]').first();   
    }
     async clickContact(): Promise<void> {

        await this.contactLink.waitFor({
            state:"visible"
        });

        await this.click(this.contactLink);

    }
    async clickShop(): Promise<void> {

    console.log("Inside clickShop");

    console.log("Shop count:", await this.shopLink.count());

    console.log("Visible:", await this.shopLink.isVisible());

    await this.shopLink.click();

    console.log("Clicked Shop");

}
}


console.log(ConfigManager.baseURL);