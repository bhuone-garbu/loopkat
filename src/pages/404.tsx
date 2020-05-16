import React from 'react';
import { NextPage } from 'next';

const ErrorPage: NextPage = () => <div>Page Not Found</div>;

/* ErrorPage.getInitialProps = async (ctx: NextPageContext): Promise<{}> => {
  if (ctx.res) ctx.res.statusCode = 404;
  return {};
}; */

export default ErrorPage;
