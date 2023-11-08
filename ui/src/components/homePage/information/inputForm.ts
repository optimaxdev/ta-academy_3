import { Component } from "@Core/component";

export enum InputText {

    Firstname = 'First Name',
    Lastname = 'Last Name',
    Email = 'Email',
    Password = 'Password',

}

export class InputForm extends Component {
    private LOCATORS = {
        inputField: (text: InputText) =>
            this.locator.locator(`//input[contains(@placeholder, "${text}")]`),

        newAccountBtn: this.locator.locator(
            '//button[contains(@aria-label, "Create new account")]'
        ),
    };

    public async typeOnInput(input: InputText, text: string): Promise<void> {
        await this.LOCATORS.inputField(input).type(text);
    };

    public async create(): Promise<void> {
        await this.LOCATORS.newAccountBtn.click();
    };

    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    };
}

