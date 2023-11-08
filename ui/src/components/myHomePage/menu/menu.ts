import { Component } from '@Core/component';
import { TopSide } from '@Components/homePage/homePage/header/topSide';

export class Menu extends Component {
    private LOCATORS = {
        topSide: this.locator.locator('//div[contains(@class, "topStrip__container")]'),
       
    };

    public TopSide = new TopSide(this.LOCATORS.topSide, this.page);
    
}