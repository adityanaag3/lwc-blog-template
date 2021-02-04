import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    @api previous;
    @api next;

    get showprevious() {
        return this.previous && this.previous !== '.';
    }

    get shownext() {
        return this.next && this.next !== '.';
    }
}
