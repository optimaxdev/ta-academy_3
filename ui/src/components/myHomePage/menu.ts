import { Container } from '@Core/container';
import { Menu } from '@Components/myhomePage/menu/menu';
import { TopSide } from '@Components/homePage/homePage/header/topSide';

export class menu extends Container {
    protected LOCATORS = {
        header: this.page.locator('//div[contains(@class, "topStrip__wrap___2eMV_")]'),
        
    };

    public Menu = new Menu(this.LOCATORS.header, this.page);

    

    public async open(): Promise<void> {
        await this.page.locator('//div[contains(@class, "topStrip__container")]').click()
    }
}
