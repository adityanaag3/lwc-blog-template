/* eslint-disable no-undef */
// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    buildDir: './build',
    resources: [
        { from: 'src/resources/', to: 'build/resources/' },
        { from: 'src/admin/', to: 'build/admin/' },
        { from: 'src/posts/', to: 'build/posts/' }
    ]
};
