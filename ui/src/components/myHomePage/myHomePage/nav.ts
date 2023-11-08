import { Component} from "@Core/component";

export class LoginApp extends Component {
    private LOCATORS ={
        createBtn: this.locator.locator('//button[span/span[contains(text(), "Create UHCGlasses.com Account")]'),

    }
    
    public async clickMyAccount(): Promise<void>{
        await this.LOCATORS.createBtn.click()
    }
};

