import { Component } from '@Core/component';

export class CreateButton extends Component {
    private LOCATORS = {

        button: this.locator.locator('//button[span/span[contains(text(), "Create UHCGlasses.com Account")]]'),
    };

    
    public async clickCreateButton(): Promise<void> {
        await this.LOCATORS.button.click();
    };

    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    };
}

    

   


