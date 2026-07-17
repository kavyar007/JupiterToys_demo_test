import {When,Then} from "@cucumber/cucumber";
import { contactPage } from "./contactNavigation.steps";

When(
"user clicks on submit button without entering details",
async()=>{

    await contactPage.clickSubmit();

});


Then(
"mandatory field validation errors should be displayed",
async()=>{

    await contactPage.verifyValidationErrors();

});


Then(
"mandatory field validation errors should disappear",
async()=>{

    await contactPage.verifyErrorsDisappear();

});