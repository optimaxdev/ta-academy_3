import { Component } from '@Core/component';

export enum InputTypes{
    Login = 'Log in',
    SignOut = 'Sign out',
    MyAccount = 'My Account',
}

export class AccountItem extends Component {
    private LOCATORS = {
        action: (btnName: InputTypes) =>
            this.locator.locator(`//button[contains(text(),"${btnName}")]`),
    };

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }

    public async clickToAction(btnName: InputTypes): Promise<void> {
        await this.LOCATORS.action(btnName).click();
    }
}