import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/layouts/theme';
import NextNprogress from 'nextjs-progressbar';
import '@/components/styles/jquery.pagepiling.css';
//import 'react-calendar-heatmap/dist/styles.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>bworks</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <NextNprogress
          color="#FFF"
          startPosition={0.3}
          stopDelayMs={200}
          height={1}
          showSpinner={false}
          options={{ easing: 'ease', showSpinner: false }}
        />

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
