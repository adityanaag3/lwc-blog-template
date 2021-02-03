import { LightningElement } from 'lwc';
import config from '../../../../config/blog.js';

export default class SocialHandles extends LightningElement {
    get socialHandles() {
        return config.socialHandles.map(function (el) {
            el.svgUrl = `/resources/social-icons/${el.name}.svg#${el.name}`;
            el.ariaLabel = `Icon for ${el.name}`;
            return el;
        });
    }
}
