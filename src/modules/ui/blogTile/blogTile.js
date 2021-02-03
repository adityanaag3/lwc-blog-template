import { LightningElement, api } from 'lwc';

export default class BlogTile extends LightningElement {
    @api dateString;
    @api title;
    @api thumbnail;
    @api permalink;
}
