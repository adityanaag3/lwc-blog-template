/* eslint-disable no-undef */

const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: {
        content: ['./src/**/*.html', '.eleventy.js'],
        options: {
            safelist: ['dark']
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
                h5: { fontSize: theme('fontSize.xl') },
                hr: { marginTop: theme('spacing.4') },
                blockquote: {
                    paddingLeft: theme('spacing.4'),
                    borderLeftWidth: theme('borderWidth.4'),
                    borderColor: theme('colors.gray.200'),
                    borderStyle: 'solid'
                }
            });
        })
    ]
};
