import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import getParentUrl from '../../helper/getParentUrl';

export default () => {
    const { url } = useRouteMatch();

    return (
        <div>
            <p>And this is sub page A.</p>

            <Link to={getParentUrl(url)}>Show no subpage</Link>
        </div>
    );
};
