import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <main>
        <p>This is page 2.</p>

        <p>
            <Link to="/">Go back</Link>
        </p>
    </main>
);
