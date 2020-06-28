import React from 'react';
import { Helmet } from 'react-helmet';

const PageHeaders = () => (
  <Helmet htmlAttributes={{ lang: 'en-US' }}>
    <title>Theater</title>
  </Helmet>
);

export default React.memo(PageHeaders);
