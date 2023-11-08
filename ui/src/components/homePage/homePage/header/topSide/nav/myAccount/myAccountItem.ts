import { Component } from '@Core/component';

export enum AccountLinks {
    Login = 'Log in',
    OrderTracking = 'Order Tracking',
    ExchangesReturns = 'Exchanges & Returns',
    SignOut = 'Sign out',
    MyAccount = 'My Account',
};

export class MyAccountItem  extends Component {
    private LOCATORS = {
        step: (btnName: AccountLinks) =>
            this.locator.locator(`//button[contains(text(),"${btnName}")]`),
    };

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    };

    public async clickLogin(btnName: AccountLinks): Promise<void> {
        await this.LOCATORS.step(btnName).click();
    };
    
}
    
           