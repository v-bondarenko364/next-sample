import { AppProps } from 'next/app';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
