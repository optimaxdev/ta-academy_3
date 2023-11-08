import { Component } from '@Core/component';

export class LoginModal extends Component {
    private LOCATORS = {
        hoverBtn: this.locator.locator ('//div[text()="My Account"]/../..'),
        createBtn: this.locator.locator('//div[contains(@class, "myAccount__accountContainer___oLDo_")]'),

    };

    public async hoverrBtn(): Promise<void> {
        await this.LOCATORS.hoverBtn.hover();
    }

    public async clickCreatebtn(): Promise<void> {
        await this.LOCATORS.createBtn.click();
    }



    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    }
}