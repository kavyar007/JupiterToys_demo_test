import { Locator, Page, expect } from "@playwright/test";
import { Basepage } from "./BasePage";
import { ConfigManager } from "../config/configManager";


export class ContactPage extends Basepage {


    private readonly forenameTextbox: Locator;
    private readonly surnameTextbox: Locator;
    private readonly emailTextbox: Locator;
    private readonly telephoneTextbox: Locator;
    private readonly messageTextbox: Locator;
    private readonly submitButton: Locator;
    private readonly validationErrors: Locator;
    private readonly successMessage: Locator;



    constructor(page: Page) {

        super(page);


        // Input fields

        this.forenameTextbox =
            page.locator('input[name="forename"]');


        this.surnameTextbox =
            page.locator('input[name="surname"]');


        this.emailTextbox =
            page.locator('input[name="email"]');


        this.telephoneTextbox =
            page.locator('input[name="telephone"]');


        this.messageTextbox =
            page.locator('textarea[name="message"]');



        // Submit button

       this.submitButton =
    page.getByRole('link', { name: 'Submit' });



        // Validation errors

        this.validationErrors =
            page.locator('.help-inline');

        //Verify Success Message
        this.successMessage =
    page.locator('.alert-success'); 

    }

  async clickSubmit(): Promise<void> {

    await this.submitButton.click();

    await this.page.waitForLoadState("networkidle");

}
    async enterMandatoryDetails(): Promise<void> {


        await this.fill(
            this.forenameTextbox,
            ConfigManager.forename
        );


        await this.fill(
            this.surnameTextbox,
            ConfigManager.surname
        );


        await this.fill(
            this.emailTextbox,
            ConfigManager.email
        );


        await this.fill(
            this.telephoneTextbox,
            ConfigManager.telephone
        );


        await this.fill(
            this.messageTextbox,
            ConfigManager.message
        );

    }

    async verifyValidationErrors(): Promise<void> {


    await expect(
        this.validationErrors
    ).toHaveCount(3, {
        timeout: 10000
    });

}


    async verifyErrorsDisappear(): Promise<void> {


        await expect(
            this.validationErrors
        ).toHaveCount(0);


    
    }
   async verifySuccessMessage(): Promise<void> {

    await expect(
        this.successMessage
    ).toBeVisible({
        timeout: 10000
    });

    await expect(
        this.successMessage
    ).toContainText("Thanks");


}
async enterContactDetails(
    forename:string,
    surname:string,
    email:string,
    telephone:string,
    message:string
): Promise<void>{

    await this.fill(
        this.forenameTextbox,
        forename
    );

    await this.fill(
        this.surnameTextbox,
        surname
    );

    await this.fill(
        this.emailTextbox,
        email
    );

    await this.fill(
        this.telephoneTextbox,
        telephone
    );

    await this.fill(
        this.messageTextbox,
        message
    );

}
    

}