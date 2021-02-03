/* eslint-disable no-undef */

const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: {
        content: ['./src/**/*.html'],
        options: {
            safelist: ['dark', 'table-auto', 'border-2', 'border']
        }
    },
    darkMode: 'class',
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.4xl') },
                h2: { fontSize: theme('fontSize.3xl') },
                h3: { fontSize: theme('fontSize.xl') }
            });
        })
    ]
};
