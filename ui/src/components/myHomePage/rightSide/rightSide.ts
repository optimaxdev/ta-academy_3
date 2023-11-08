import { Component } from "@Core/component";
import { Container } from "@Core/container";


export class Navigation extends Component {
    private LOCATORS = {
        myAccount: this.locator.locator('//div[contains(@class, "myAccount__accountContainer___oLDo_")]'),
    };

    public async myAccountclick(): Promise<void> {
        await this.LOCATORS.myAccount.click()
    }

}