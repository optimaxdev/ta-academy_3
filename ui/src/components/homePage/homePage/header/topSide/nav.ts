import { Component } from '@Core/component';
import { MyAccount } from './nav/myAccount';

export class Nav extends Component {
    protected LOCATORS = {
        navItemPhone: this.locator.locator(
            '//a[contains(@class, "topStripPhoneNumber__phoneNumber___2L_05")]'
        ),
        navItemButton: this.locator.locator(
            '//button[contains(@class, "accessibilityButton__icon___3-a4u")]'
        ),

        navItemCustom: this.locator.locator(
            '//div[contains(@class, "customerCare__customerCare")]'
        ),
        navItemMyAccount: this.locator.locator(
            '//div[contains(@class, "myAccount__myAccountMenu")]'
        ),
    };

    public MyAccount = new MyAccount(this.LOCATORS.navItemMyAccount, this.page);
}