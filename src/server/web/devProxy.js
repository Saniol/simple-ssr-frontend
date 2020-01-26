
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        applyDevProxy: () => {},
    };
    return;
}

// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

const applyDevProxy = (app) => {
    app.use(
        proxy('/statics/webapp', { target: 'http://localhost:8080', logLevel: 'debug' }),
    );
};

module.exports = {
    applyDevProxy,
};
