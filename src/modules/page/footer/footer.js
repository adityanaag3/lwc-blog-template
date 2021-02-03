import { LightningElement } from 'lwc';
import config from '../../../../config/blog.js';

export default class Footer extends LightningElement {
    get blogName() {
        return config.title;
    }

    get year() {
        const d = new Date();
        return d.getFullYear();
    }
}
