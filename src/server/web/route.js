const { applyStatic } = require('./static');
const { applyDevProxy } = require('./devProxy');
const { prerenderWebAppRoute } = require('./prerender');

const applyRoutes = (app) => {
    applyStatic(app);
    applyDevProxy(app);

    app.get('/*', prerenderWebAppRoute);
};

module.exports = {
    applyRoutes,
};
