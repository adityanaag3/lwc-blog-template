// Transformer to ensure that non-relative links open in a new window
// and have for SEO reasons `rel="noopener"` set.

const { JSDOM } = require('jsdom');
const siteconfig = require('../config/blog.js');

const processHrefs = async (el) => {
    if (
        !el.href.startsWith(siteconfig.publicPath) &&
        !el.href.startsWith(siteconfig.blogUrl) &&
        !el.href.startsWith('about:blank#')
    ) {
        el.target = '_blank';
        el.rel = 'noopener';
    }
};

const convert = async (rawContent, outputPath) => {
    let content = rawContent;

    if (outputPath && outputPath.endsWith('.html')) {
        const dom = new JSDOM(content);
        // eslint-disable-next-line @lwc/lwc/no-document-query
        const hrefs = [...dom.window.document.querySelectorAll('a')];

        if (hrefs.length > 0) {
            await Promise.all(hrefs.map((i) => processHrefs(i)));
            content = dom.serialize();
        }
    }

    return content;
};

// eslint-disable-next-line no-undef
module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform('externalContentLinks', convert);
    }
};
