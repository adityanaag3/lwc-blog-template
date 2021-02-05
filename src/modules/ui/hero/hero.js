import { LightningElement, api } from 'lwc';

export default class Hero extends LightningElement {
    @api publicPath;

    renderedCallback() {
        this.template
            .querySelector('.hero-bg')
            .style.setProperty(
                '--bgurl',
                `url(${this.publicPath}resources/blog-bg.jpeg)`
            );
    }
}
