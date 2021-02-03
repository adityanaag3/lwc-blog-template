import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    @api previous;
    @api next;
}
