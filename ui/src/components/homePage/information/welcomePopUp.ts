import { Component } from '@Core/component';

export class WelcomePopup extends Component {
    
    private LOCATORS = {
        popUpBox: this.locator.locator('//div[contains(@class, "welcomePopup__wrapper___dRQ0d")]'),
        closeButton: this.locator.locator('//button[contains(@class, "rc-dialog-close")]'),
        getStarted: this.locator.locator(
            '//a[contains(@class, "button__btn___FGA-N button__portGore___2Cw0E welcomePopup__getStartedLink_")]'
        ),
    };

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }

    public async closePopup(): Promise<void> {
        await this.LOCATORS.closeButton.click();
    };


    public async getStarted(): Promise<string | null> {
        return await this.LOCATORS.getStarted.textContent();
    };

    public async innerText(): Promise<string | null> {
        const titleElement = this.LOCATORS.getStarted;
        return titleElement ? await titleElement.textContent() : null;
    };
}



