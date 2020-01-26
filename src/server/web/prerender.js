const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { default: WebApp } = require('../../webapp/App.jsx');
const { getPreloadFunctions } = require('../../webapp/StaticDataLoader');

const preloadData = async (urlPath, store) => {
    await Promise.all([
        ...getPreloadFunctions(urlPath)
            .map((preloadFn) => store.dispatch(preloadFn())),
    ]);
};

const prerenderWebAppRoute = async (req, res) => {
    const webApp = new WebApp();
    const store = webApp.createStore();

    await preloadData(req.url, store);

    const context = {};
    const routerProps = {
        location: req.url,
        context,
    };
    const html = ReactDOMServer.renderToString(
        webApp.render(StaticRouter, routerProps)
    );

    if (context.url) {
        res.redirect(301, context.url);
        return;
    }

    const state = JSON.stringify(store.getState()).replace(/"/g, '\\"');

    res.render('index', {
        html,
        state,
    });
};

module.exports = {
    prerenderWebAppRoute,
};
