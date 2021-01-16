import { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/globals.css';

interface Props {
	Component: FC<AppProps>;
	pageProps: AppProps;
}

const MyApp = ({ Component, pageProps }: Props) => {
	return <Component {...pageProps} />;
};

export default MyApp;
