import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Hello from './hello/Hello.jsx';
import Page1 from './hello/Page1.jsx';
import Page2 from './hello/Page2.jsx';
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
        <Route exact path="/" component={Hello} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/list" component={List} />
    </Router>
);

export default WebApp;
