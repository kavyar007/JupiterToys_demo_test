import {
    Given,
    When,
    Then
} from "@cucumber/cucumber";

import { contactPage } from "./contactNavigation.steps";


When(
    "user clicks on submit button",
    async () => {


        await contactPage.clickSubmit();


    });



Then(
    "successful submission message should be displayed",
    async () => {


        await contactPage.verifySuccessMessage();


    });