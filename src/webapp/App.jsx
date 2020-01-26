import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './hello/Page.jsx';
import Page1 from './page1/Page.jsx';
import Page2 from './page2/Page.jsx';
import List from './list/List.jsx';
import appReducer from './appReducer';

class WebApp {
    constructor(config) {
        const { container } = config;

        this.container = container;
    }

    createStore() {
        this.store = createStore(
            appReducer,
            applyMiddleware(
                thunkMiddleware,
            ),
        );
    }

    init() {
        this.createStore();

        ReactDOM.render((
            <Provider store={this.store}>
                <App />
            </Provider>
        ), this.container);
    }
}

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/list" component={List} />
        </Switch>
    </Router>
);

export default WebApp;
