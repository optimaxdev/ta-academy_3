import { Component } from "@Core/component";

export class NavMenu extends Component {
    private LOCATORS ={
        clickMyAccount: this.locator.locator('//div[contains(@class,"myAccount__accountContainer___oLDo")]'),

    };

    public async clickMyAccount(): Promise<void>{
        await this.LOCATORS.click();
        
    }
};

