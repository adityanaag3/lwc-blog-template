/* eslint-disable @lwc/lwc/no-document-query */
import '@lwc/synthetic-shadow';
import Header from 'page/header';
import Footer from 'page/footer';
import 'tailwindcss/tailwind.css';

customElements.define('page-header', Header.CustomElementConstructor);
customElements.define('page-footer', Footer.CustomElementConstructor);

window.addEventListener('themechange', (event) => {
    if (event.detail.theme === 'dark') {
        document.querySelector('html').classList.add('dark');
    } else {
        document.querySelector('html').classList.remove('dark');
    }
});

if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark');
} else {
    document.querySelector('html').classList.remove('dark');
}
