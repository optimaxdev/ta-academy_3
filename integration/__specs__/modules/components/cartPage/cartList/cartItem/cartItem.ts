import { Component } from '@Core/component';
import { ShorthandPropertyAssignment } from 'typescript';

export class CartItem extends Component {
    protected selectors = {
        title: 'h2',
        fullPrice: './/div[contains(@class, "fullprice")]',
        name: './/div//h2[contains(text(), "Pepa Pig")]',
        qunatity: './/div[@data-testid="quantity-current"]',
        addButton: './/button[text()="+"]',
        deleteItemButton: '//button[@data-testid="delete-btn"]',
    };

    public async getPriceForAll(): Promise<number> {
        const [priceElement] = await this.element.waitForXpath(this.selectors.fullPrice);
        return Number(priceElement.textContent.replace('$', ''));
    };

    public async getTitle(): Promise<string> {
        const [title] = await document.waitForQuerySelector(this.selectors.title);
        return title.textContent;
    };

    public async getInputName(): Promise<string> {
        const [name] = await this.element.waitForXpath(this.selectors.name);
        return name.textContent;
    };

    public async getInputQuantity(): Promise<number> {
        const [qunatity] = await this.element.waitForXpath(this.selectors.qunatity);
        return Number(qunatity.textContent);
    };

    public async getPriceNewItem(): Promise<number> {
        const priceForall = await this.getPriceForAll();
        const quantity = await this.getInputQuantity();
        return priceForall/quantity;
    };

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.addButton);
    };

    public async deleteItem(): Promise<void> {
        await this.element.clickByXpath(this.selectors.deleteItemButton);
    };

    
}
