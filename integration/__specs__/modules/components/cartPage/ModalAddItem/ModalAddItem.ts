import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

export class ModalAddItem extends Component {
    protected selectors = {
        title: 'h2',
        inputName: '//input[contains(@data-testid, "input-name")]',
        inputPrice: '//input[contains(@data-testid, "input-price")]',
        inputQuantity: '//input[contains(@data-testid, "input-quantity")]',
        buttonCreate: '//button[text()="Create"]',
    };

    public async fillInputs(): Promise<void> {
        const [fillInputName] = await this.element.waitForXpath(this.selectors.inputName);
        const [fillInputPrice] = await this.element.waitForXpath(this.selectors.inputPrice);
        const [fillInputQunatity] = await this.element.waitForXpath(this.selectors.inputQuantity);

        fireEvent.change(fillInputName, { target: { value: 'Pepa Pig' } });
        fireEvent.change(fillInputPrice, { target: { value: 25 } });
        fireEvent.change(fillInputQunatity, { target: { value: 2 } });
    };

    public async buttonCreateClick(): Promise<void> {
        const [buttonCreate] = await this.element.waitForXpath(this.selectors.buttonCreate);
        fireEvent.click(buttonCreate);
    };

   
}



