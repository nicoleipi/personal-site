import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for doesn't exist at this address. Unless you were looking for this error page, in which case: Yay! You found it :)" />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
