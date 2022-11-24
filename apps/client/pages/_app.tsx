import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';
import {PageBasePC} from 'components/customs/page-base-pc';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <ChakraProvider>
      <PageBasePC>
        <Head>
          <title>{pageProps?.title ?? 'foody'}</title>
          <meta charSet='utf-8' />
        </Head>
        <Component {...pageProps} />
      </PageBasePC>
    </ChakraProvider>);
}

export default App;
