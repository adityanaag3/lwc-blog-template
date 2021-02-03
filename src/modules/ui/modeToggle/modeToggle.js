import { LightningElement } from 'lwc';

export default class ModeToggle extends LightningElement {
    handleChange(event) {
        let theme;
        if (event.target.checked) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        localStorage.theme = theme;
        const themeChangeEvent = new CustomEvent('themechange', {
            detail: { theme },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(themeChangeEvent);
    }

    renderedCallback() {
        if (localStorage.theme === 'dark') {
            this.template.querySelector('.dn').setAttribute('checked', true);
        }
    }
}
