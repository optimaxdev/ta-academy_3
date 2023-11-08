import { Component } from '@Core/component';

export class HeaderText extends Component {
    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }
}