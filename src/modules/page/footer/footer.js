import { LightningElement, api } from 'lwc';
import config from '../../../../config/blog.js';

export default class Footer extends LightningElement {
    @api publicPath = '/';

    get homeUrl() {
        return this.publicPath;
    }

    get blogName() {
        return config.title;
    }

    get year() {
        const d = new Date();
        return d.getFullYear();
    }
}
