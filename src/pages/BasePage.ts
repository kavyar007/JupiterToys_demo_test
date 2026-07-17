import { Locator, Page, expect } from '@playwright/test'

export class Basepage {
    constructor(protected page: Page) { }

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }
    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }
    async clear(locator: Locator): Promise<void> {
        await locator.clear();
    }
    async gettext(locator: Locator): Promise<string> {
        return (await locator.textContent()) ??"";
    }
    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }
    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }
     async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async verifyHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    async verifyNotVisible(locator: Locator): Promise<void> {
        await expect(locator).not.toBeVisible();
    }

    async verifyValue(locator: Locator, expectedValue: string): Promise<void> {
        await expect(locator).toHaveValue(expectedValue);
    }
    
     
 
}