import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import SubPageA from './subPageA/Page.jsx';
import SubPageB from './subPageB/Page.jsx';

export default () => {
    const { url } = useRouteMatch();

    return (
        <main>
            <p>This is page 1.</p>

            <Switch>
                <Route path={`${url}/subPageA`} component={SubPageA} />
                <Route path={`${url}/subPageB`} component={SubPageB} />
                <Route path={url} exact>
                    <Link to={`${url}/subPageA`}>Show subpage A</Link>
                    <br />
                    <Link to={`${url}/subPageB`}>Show subpage B</Link>
                    <br />
                </Route>
            </Switch>

            <p>
                <Link to="/">Go back</Link>
            </p>
        </main>
    );
};
