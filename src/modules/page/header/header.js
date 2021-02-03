import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {
    @api hero = false;
    @api progress = false;

    renderedCallback() {
        const navBar = this.template.querySelector('nav');
        if (this.hero) {
            navBar.classList.remove('bg-white');
            navBar.classList.remove('dark:bg-gray-800');
            navBar.classList.remove('text-gray-800');
            navBar.classList.add('text-gray-100');
            document.addEventListener('scroll', () => {
                let scrollpos = window.scrollY;
                if (scrollpos > 10) {
                    navBar.classList.add('bg-white');
                    navBar.classList.add('dark:bg-gray-800');
                    navBar.classList.remove('text-gray-100');
                } else {
                    navBar.classList.remove('bg-white');
                    navBar.classList.remove('dark:bg-gray-800');
                    navBar.classList.add('text-gray-100');
                }
            });
        } else {
            navBar.classList.add('dark:text-gray-100');
        }

        if (this.progress) {
            let h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight',
                progress = this.template.querySelector('.progress');

            document.addEventListener('scroll', function () {
                /*Refresh scroll % width*/
                let scroll =
                    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) *
                    100;
                progress.style.setProperty('--scroll', scroll + '%');
            });
        }
    }
}
