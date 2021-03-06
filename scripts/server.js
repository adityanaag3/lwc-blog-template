// Simple Express server setup to serve the build output
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const siteConfig = require('../config/blog.js');

const app = express();

let directives = {
    defaultSrc: ["'self'"],
    scriptSrcElem: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'"]
};

directives.imgSrc.push(...siteConfig.safeList.imgSrc);
directives.styleSrc.push(...siteConfig.safeList.styleSrc);
directives.scriptSrcElem.push(...siteConfig.safeList.scriptSrcElem);
directives.defaultSrc.push(...siteConfig.safeList.defaultSrc);

app.use(
    helmet.contentSecurityPolicy({
        directives
    })
);
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './public';

app.use(express.static(DIST_DIR));

/*app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});*/

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
