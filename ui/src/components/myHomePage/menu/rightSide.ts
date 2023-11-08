import { Component } from "@Core/component";



export class RightSide extends Component {
    protected LOCATORS = {

        myAccount: this.locator.locator('//div[contains(@class,"myAccount__myAccountMenu___2mbVE")]'),
        
    };

    public async clickMyAccount(): Promise<void> {
        await this.LOCATORS.myAccount.click()
    }

    // public MyAccount = new RightSide(this.LOCATORS.myAccount, this.page);
}
