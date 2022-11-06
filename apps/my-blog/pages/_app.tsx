import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';
import {PageBasePC} from 'components/customs/page-base-pc';

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider><PageBasePC><Component {...pageProps} /></PageBasePC></ChakraProvider>
}
