import {Before,After,setDefaultTimeout} from "@cucumber/cucumber";
import {chromium,Browser,Page} from "playwright";
import { pageFixture } from "./pageFixture";
setDefaultTimeout(30000);

let browser: Browser;
Before(async () => {

    browser = await chromium.launch({
        headless: false,
        slowMo: 1500
    });

    const page = await browser.newPage();

    pageFixture.page =
        await browser.newPage();

});

After(async () => {


    await browser.close();


});