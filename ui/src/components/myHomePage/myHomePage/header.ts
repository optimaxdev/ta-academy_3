import { Component } from '@Core/component';
import { TopSide } from './header/topSide';

export class Header extends Component {
    private LOCATORS = {
        topSide: this.locator.locator('//div[contains(@class, "topStrip__container")]'),
       
    };

    public TopSide = new TopSide(this.LOCATORS.topSide, this.page);
    

   
}

