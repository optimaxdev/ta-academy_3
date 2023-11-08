import { Component } from '@Core/component';

export class NavMenuText extends Component {
    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }
}