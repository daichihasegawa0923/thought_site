import { Box, HStack } from '@chakra-ui/react';
import { tokens } from 'design-tokens';
import { ReactNode } from 'react';

export const PageBasePC: React.FC<{children?: ReactNode}> = (props) => {
    return(
    <>
      <Box height={'100px'} width={'100%'} fontSize={tokens.fontSize.lerge}>
          The Blog.
      </Box>
        <HStack>
          <Box>
              {props.children}
          </Box>
          {/**サイドメニュー */}
          <Box width={'160px'}>

          </Box>
        </HStack>
    </>
    );
}