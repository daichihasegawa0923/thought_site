import { background, extendTheme } from '@chakra-ui/react';
import { tokens } from 'design-tokens';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%'
      },
      body: {
        height: '100%',
        backgroundColor: tokens.bgColor.positive,
      }
    }
  }
});