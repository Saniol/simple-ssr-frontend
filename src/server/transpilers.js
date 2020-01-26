if (process.env.NODE_ENV === 'production') {
    return;
}

const path = require('path');

const webappPath = path.resolve(__dirname, '../webapp');

// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({
    only: [
        function matchWebAppPaths(filepath) {
            return filepath.indexOf(webappPath) === 0;
        },
    ],
    presets: [
        '@babel/preset-react',
        '@babel/preset-env',
    ],
});
