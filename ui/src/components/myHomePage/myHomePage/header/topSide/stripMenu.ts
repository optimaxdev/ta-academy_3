import { Component } from '@Core/component';
import { MyAccountNav } from './myAccountNav/myAccountNav';

export class StripMenu extends Component {
    protected LOCATORS = {
       
        myAccountNav: this.locator.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
    };

    public MyAccountNav = new MyAccountNav(this.LOCATORS.myAccountNav, this.page);
}