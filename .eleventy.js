const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
const siteConfig = require('./config/blog.js');
const markdownItReplaceLink = require('markdown-it-replace-link');
const emoji = require('markdown-it-emoji');

loadLanguages(['apex', 'css', 'html', 'js', 'xml', 'javascript']);

const markdownIt = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
    xhtmlOut: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && Prism.languages[lang]) {
            return (
                '<pre class="language-' +
                lang +
                '"><code>' +
                Prism.highlight(str, Prism.languages[lang], lang) +
                '</code></pre>'
            );
        }
        return (
            '<pre class="language-none"><code>' +
            markdownIt.utils.escapeHtml(str) +
            '</code></pre>'
        );
    },
    replaceLink: function (link, env) {
        if (link.startsWith('/')) {
            return link.replace('/', siteConfig.publicPath);
        }
        return link;
    }
})
    .use(markdownItReplaceLink)
    .use(emoji);

markdownIt.renderer.rules.table_open = function (tokens, idx) {
    return '<table class="table-auto w-full border-2 my-4">';
};

markdownIt.renderer.rules.th_open = function (tokens, idx) {
    return '<th class="border p-1.5">';
};

markdownIt.renderer.rules.td_open = function (tokens, idx) {
    return '<td class="border p-1.5">';
};

markdownIt.renderer.rules.ordered_list_open = function (tokens, idx) {
    return '<ol class="list-decimal list-outside pl-8">';
};

markdownIt.renderer.rules.bullet_list_open = function (tokens, idx) {
    return '<ul class="list-disc list-outside pl-8">';
};

markdownIt.renderer.rules.paragraph_open = function (tokens, idx) {
    return '<p class="mb-3">';
};

let defaultLinkRender =
    markdownIt.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

markdownIt.renderer.rules.link_open = function (
    tokens,
    idx,
    options,
    env,
    self
) {
    let aIndex = tokens[idx].attrIndex('class');
    let classNames = 'text-blue-600 dark:text-blue-400 hover:underline';
    if (aIndex < 0) {
        tokens[idx].attrPush(['class', classNames]); // add new attribute
    } else {
        tokens[idx].attrs[aIndex][1] = classNames; // replace value of existing attr
    }
    return defaultLinkRender(tokens, idx, options, env, self);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.setLibrary('md', markdownIt);
    eleventyConfig.setTemplateFormats(['md', 'njk']);
    eleventyConfig.addLayoutAlias('post', 'layout-post.njk');
    eleventyConfig.addPassthroughCopy('build/resources');
    eleventyConfig.addPassthroughCopy('build/admin');
    eleventyConfig.addPassthroughCopy('build/**/*.js');
    eleventyConfig.addPassthroughCopy('build/**/*.html');

    eleventyConfig.addCollection('posts', function (collectionApi) {
        return collectionApi.getFilteredByGlob('build/posts/**/*.md');
    });

    // Plugin for setting _blank and rel=noopener on external links in markdown content
    eleventyConfig.addPlugin(require('./_11ty/external-links.js'));

    // Plugin for minifying HTML
    eleventyConfig.addPlugin(require('./_11ty/html-minify.js'));

    return {
        dir: {
            input: 'build',
            includes: '_includes',
            output: 'public',
            data: '../config'
        },
        pathPrefix: siteConfig.publicPath
    };
};
