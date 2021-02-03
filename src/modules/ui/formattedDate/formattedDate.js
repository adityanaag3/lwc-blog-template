import { LightningElement, api } from 'lwc';
import date from 'date-and-time';

export default class FormattedDate extends LightningElement {
    @api dateString;
    @api format;

    get formattedDateStr() {
        if (this.dateString) {
            const parsedDate = Date.parse(this.dateString);
            const d = new Date(parsedDate);
            let _format = this.format;
            if (!_format) {
                // Tokens from https://github.com/knowledgecode/date-and-time
                _format = 'D MMM YYYY';
            }
            return date.format(d, _format);
        }
        return '';
    }
}
