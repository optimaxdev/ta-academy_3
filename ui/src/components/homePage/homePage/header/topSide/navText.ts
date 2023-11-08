import { Component } from '@Core/component';


export class NavText extends Component {
    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    };

}