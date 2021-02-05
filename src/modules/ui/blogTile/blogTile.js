import { LightningElement, api } from 'lwc';

export default class BlogTile extends LightningElement {
    @api dateString;
    @api title;
    @api thumbnail;
    @api permalink;
    @api tags;

    get tagList() {
        let _tags = [];
        if (this.tags) {
            _tags = this.tags.split(',');
        }
        return _tags;
    }
}
