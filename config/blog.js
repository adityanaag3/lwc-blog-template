// eslint-disable-next-line no-undef
module.exports = {
    // The name of your blog that appears as page titles, and in the footer
    title: 'LWC CMS Blog',
    // The URL of your blog
    blogUrl: 'someurl.com',
    // Appended at the beginning of relative URLs. Give a directory name if your site lives in a different subdirectory (particularly useful with GitHub pages)
    publicPath: '/',
    // Meta Descrition for the home page of your blog for SEO purposes
    homePageMetaDescription: 'This is a blog template for LWC',
    // Meta Descrition for the About Me page of your blog for SEO purposes
    aboutPageMetaDescription: 'This is a about me.',
    // A list of social handles that will be shown in the footer and About me page. Remove the ones you dont have, and they wont be shown.
    socialHandles: [
        { name: 'facebook', url: 'https://facebook.com/' },
        { name: 'twitter', url: 'https://twitter.com/' },
        { name: 'linkedin', url: 'https://linkedin.com/' },
        { name: 'instagram', url: 'https://instagram.com/' },
        { name: 'youtube', url: 'https://youtube.com/' },
        { name: 'github', url: 'https://github.com/' },
        { name: 'twitch', url: 'https://twitch.com/' }
    ],
    // For Heroku Deployment Only: Specify the external URLs that you use in your posts for images, styles, scripts so that they are safelisted.
    safeList: {
        imgSrc: ['*.github.com', '*.unsplash.com'],
        styleSrc: [],
        scriptSrcElem: [],
        defaultSrc: []
    }
};
