import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '../redux/store';
import { GlobalStyle } from '../theme/globalStyles';
import theme from '../theme/theme';

interface Props {
  Component: FC<AppProps>;
  pageProps: AppProps;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.colors.primary} />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);
