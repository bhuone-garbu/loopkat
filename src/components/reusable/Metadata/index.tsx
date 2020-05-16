import React from 'react';

import Head from 'next/head';

interface Props {
  description?: string;
  title?: string;
}

const Metadata = ({ description, title }: Props) => (
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
    <link href="/favicon.ico" rel="icon" />
  </Head>
);

Metadata.defaultProps = {
  description: null,
  title: null,
};

export default Metadata;
