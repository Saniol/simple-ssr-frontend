import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
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
            <li>
                <Link to="/list">List</Link>
            </li>
        </ul>
    </main>
);
