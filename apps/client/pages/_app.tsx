import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';
import {PageBasePC} from 'components/customs/page-base-pc';
import Head from 'next/head';
import { theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <ChakraProvider theme={theme}>
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
