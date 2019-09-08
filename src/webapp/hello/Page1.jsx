import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <main>
        <p>This is page 1.</p>

        <p>
            <Link to="/">Go back</Link>
        </p>
    </main>
);
