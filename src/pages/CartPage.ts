import {Locator,Page,expect} from "@playwright/test";
import {Basepage} from "./BasePage";
export class CartPage extends Basepage{

private readonly cartRows:Locator;
private readonly total:Locator;

constructor(page:Page){

super(page);
this.cartRows =
page.locator('tbody tr');

this.total =
page.locator('.total');

}

async verifyPrices(){
await expect(
this.page.getByText('$10.99')
).toBeVisible();
await expect(
this.page.getByText('$9.99')
).toBeVisible();
await expect(
this.page.getByText('$14.99')
).toBeVisible();

}
async verifySubTotals(){
const subtotals =
await this.page
.locator('tbody tr td:nth-child(4)')
.allTextContents();

expect(subtotals)
.toContain('$21.98');

expect(subtotals)
.toContain('$49.95');

expect(subtotals)
.toContain('$44.97');

}

async verifyTotal() {

    const expectedTotal = 21.98 + 49.95 + 44.97;

    const totalText = await this.total.textContent();

    const actualTotal = parseFloat(
        totalText!.replace(/[^\d.]/g, "")
    );

    expect(actualTotal).toBe(expectedTotal);

}

}