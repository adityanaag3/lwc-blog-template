/* eslint-disable no-undef */

const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: {
        content: ['./src/**/*.html'],
        options: {
            safelist: [
                'dark',
                'table-auto',
                'border-2',
                'border',
                'text-green-800',
                'text-green-200',
                'hover:underline'
            ]
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
                h1: { fontSize: theme('fontSize.5xl') },
                h2: { fontSize: theme('fontSize.4xl') },
                h3: { fontSize: theme('fontSize.3xl') },
                h4: { fontSize: theme('fontSize.2xl') },
                h5: { fontSize: theme('fontSize.xl') }
            });
        })
    ]
};
