import {  Given, When, Then} from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { HomePage } from "../pages/homePage";
import { ContactPage } from "../pages/contactPage";

export let homePage: HomePage;
export let contactPage: ContactPage;

Given(
"user is on homepage",
async()=>{

    await pageFixture.page.goto(
        process.env.BASE_URL!
    );

    homePage =
        new HomePage(
            pageFixture.page
        );

});


When(
"user clicks on Contact link",
async()=>{

    await homePage.clickContact();

});


Then(
"user should be navigated to contact page",
async()=>{

    await pageFixture.page.waitForURL(
        "**/#/contact"
    );

    contactPage =
        new ContactPage(
            pageFixture.page
        );

});


When(
"user enters mandatory contact details",
async()=>{

    await contactPage.enterMandatoryDetails();

});