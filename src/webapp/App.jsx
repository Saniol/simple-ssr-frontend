import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from './hello/Page.jsx';
import Page1 from './page1/Page.jsx';
import Page2 from './page2/Page.jsx';
import List from './list/List.jsx';
import appReducer from './appReducer';
import { addPreloadedRoute } from './StaticDataLoader';

class WebApp {
    constructor(config = {}) {
        const { container } = config;

        this.container = container;
    }

    createStore(preloadedState) {
        this.store = createStore(
            appReducer,
            preloadedState,
            applyMiddleware(
                thunkMiddleware,
            ),
        );

        return this.store;
    }

    render(Router, routerProps) {
        return (
            <Provider store={this.store}>
                <Router {...routerProps}>
                    <Switch>
                        <Route exact path="/" component={Hello} />
                        <Route path="/page1" component={Page1} />
                        <Route path="/page2" component={Page2} />
                        <Route path="/list" component={List} />
                    </Switch>
                </Router>
            </Provider>
        );
    }

    init() {
        // eslint-disable-next-line no-underscore-dangle
        const preloadedState = window.__PRELOADED_STATE__
        // eslint-disable-next-line no-underscore-dangle
            ? JSON.parse(window.__PRELOADED_STATE__)
            : undefined;
        this.createStore(preloadedState);

        ReactDOM.render(this.render(BrowserRouter), this.container);
    }
}

addPreloadedRoute(
    { path: '/list' },
    List.loadData,
);

export default WebApp;
