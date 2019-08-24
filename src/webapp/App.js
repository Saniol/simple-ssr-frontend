import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Hello = () => (
    <main>
        <h1>Hello World!</h1>

        <p>Go to one of subpages</p>

        <ul>
            <li>
                <Link to="/page1">Page 1</Link>
            </li>
            <li>
                <Link to="/page1">Page 1</Link>
            </li>
        </ul>
    </main>
);

const Page1 = () => (
    <main>
        <p>This is page 1.</p>

        <p>
            <Link to="/">Go back</Link>
        </p>
    </main>
);

const Page2 = () => (
    <main>
        <p>This is page 2.</p>

        <p>
            <Link to="/">Go back</Link>
        </p>
    </main>
);

const App = () => (
    <Router>
        <Route exact path="/" component={Hello} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
    </Router>
);

export default App;
