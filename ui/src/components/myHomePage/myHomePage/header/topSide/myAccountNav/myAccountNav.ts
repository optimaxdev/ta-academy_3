import { Component } from '@Core/component';
import { AccountItem } from '@Components/myHomePage/myHomePage/header/topSide/myAccountNav/accountItem';

export class MyAccountNav extends Component {
    private LOCATORS = {
        myAccountText: this.locator.locator('//div[contains(@class, "myAccount__title")]'),
        dropDown: this.locator.locator('//div[contains(@class, "myAccount__activeClass")]'),
    };

    public hoverMyAccount = async (): Promise<void> => {
        await this.locator.hover();
    };

    public async innerText(): Promise<string | null> {
        return await this.LOCATORS.myAccountText.textContent();
    }

    public AccountItem = new AccountItem(this.LOCATORS.dropDown, this.page);
}