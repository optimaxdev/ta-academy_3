import { Component } from '@Core/component';
import { MyAccountItem } from '@Components/homePage/homePage/header/topSide/nav/myAccount/myAccountItem';

export class MyAccount extends Component {
    private LOCATORS = {
        boxMyAccount: this.locator.locator(
            '//div[contains(@class, "myAccount__accountContainer___oLDo_")]'
        ),
        link: this.locator.locator(
            '//div[contains(@class, "myAccount__activeClass")]'
        ),
    };

    public clickAccount = async (): Promise<void> => {
        await this.locator.hover();
    };

    public async innerText(): Promise<string | null> {
        const titleElement = this.LOCATORS.link;
        return titleElement ? await titleElement.textContent() : null;
    };

     
    public MyAccountItem = new MyAccountItem(this.LOCATORS.link, this.page);
}
