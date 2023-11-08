import { Component } from '@Core/component';
import { CategoryNavigation, CategoryType } from '../menu/topSide/categoryNavigation';

export class TestSide extends Component {
    protected LOCATORS = {

        navigationMyAccount: this.locator.locator('//div[contains(@class, "myAccount__accountContainer___oLDo_")]'),
    };


    public NavigationMyAccount = new CategoryNavigation(this.LOCATORS.navigationMyAccount, this.page);


    // public async open(CategoryNavigation = CategoryType.Login): Promise<void> {
    //     await Promise.all([
    //         this.page.click(CategoryNavigation),
    //     ]);
    // }
}
