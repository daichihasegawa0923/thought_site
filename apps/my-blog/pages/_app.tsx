import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';
import {PageBasePC} from 'components/customs/page-base-pc';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <ChakraProvider>
      <PageBasePC>
        <Component {...pageProps} />
      </PageBasePC>
    </ChakraProvider>);
}

export default App;
