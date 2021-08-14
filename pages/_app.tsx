import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import 'styles/core.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>우리도 절차 있는 회사야 ✓</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
export default App;
