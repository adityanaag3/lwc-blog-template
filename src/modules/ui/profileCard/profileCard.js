import { LightningElement, api } from 'lwc';

export default class ProfileCard extends LightningElement {
    @api fullName;
    @api headshotUrl;
    @api designation;
    @api location;
    @api bio;

    get headshotUrlBg() {
        return `background-image:url('${this.headshotUrl}');`;
    }
}
