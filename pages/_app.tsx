import '../styles/globals.css'

interface Props {
  _Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />
}

export default MyApp
