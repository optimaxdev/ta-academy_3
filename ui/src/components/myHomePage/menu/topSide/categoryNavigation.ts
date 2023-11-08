import { Component } from '@Core/component';
import { everySeries } from 'p-iteration';

export enum CategoryType {
    Login = 'Log in',
    OrderTracking = 'Order Tracking',
    ExchangesReturns = 'Exchanges & Returns',
}

export class CategoryNavigation extends Component {
    private LOCATORS = {
        link: (text: CategoryType) => this.locator.locator(`//a[text()="${text}"]`),
    };

    public async clickLink(category: CategoryType): Promise<void> {
        await Promise.all([
            this.LOCATORS.link(category).click(),
            this.page.waitForLoadState('domcontentloaded'),
        ]);
    }

    private listCategoryLinks: CategoryType[] = [
        CategoryType.Login,
        CategoryType.OrderTracking,
        CategoryType.ExchangesReturns,
    ];

    public async open(CategoryNavigation = CategoryType.Login): Promise<void> {
        await Promise.all([
            this.page.click(CategoryNavigation),
        ]);
    }

    public async isVisibleLinks(): Promise<boolean> {
        return await everySeries(this.listCategoryLinks, async (linkName) =>
            this.LOCATORS.link(linkName).isVisible()
        );
    }
}
