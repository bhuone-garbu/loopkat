import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

const Meta = ({ description, title }) => (
  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
      </>
    )}

    {description && (
      <>
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={description} name="twitter:description" />
      </>
    )}
  </Head>
);

Meta.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

Meta.defaultProps = {
  description: null,
  title: null,
};

export default Meta;
