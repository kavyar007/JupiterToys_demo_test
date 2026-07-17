import {Before,After,setDefaultTimeout} from "@cucumber/cucumber";
import {chromium,Browser,Page} from "playwright";
import { pageFixture } from "./pageFixture";
setDefaultTimeout(30000);

let browser: Browser;
Before(async()=>{

     browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

    pageFixture.page =
        await browser.newPage();

});

After(async () => {


    await browser.close();


});