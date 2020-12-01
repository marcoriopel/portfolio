import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head() {
    return (
        <Helmet title="Marco's Portfolio">
            <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
    );
}
