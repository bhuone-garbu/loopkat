import Head from 'next/head';
import React, { memo } from 'react';

interface Props {
  description?: string;
  hideFromBots?: boolean;
  title?: string;
}

const Metadata = ({ description, hideFromBots, title }: Props) => (
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

    {hideFromBots && <meta content="noindex, follow" name="robots" />}
  </Head>
);

Metadata.defaultProps = {
  description: undefined,
  hideFromBots: false,
  title: undefined,
};

export default memo(Metadata);
