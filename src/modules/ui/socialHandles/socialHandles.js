import { LightningElement, api } from 'lwc';
import config from '../../../../config/blog.js';

export default class SocialHandles extends LightningElement {
    @api publicPath;

    get socialHandles() {
        return config.socialHandles.map((el) => {
            el.svgUrl = `${this.publicPath}resources/social-icons/${el.name}.svg#${el.name}`;
            el.ariaLabel = `Icon for ${el.name}`;
            return el;
        });
    }
}
