/* eslint-disable @lwc/lwc/no-document-query */
import '../../shared.js';

import FormattedDate from 'ui/formattedDate';

customElements.define(
    'ui-formatted-date',
    FormattedDate.CustomElementConstructor
);

document.querySelector('body').style.display = 'block';
