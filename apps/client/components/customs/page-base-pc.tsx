import { Box, Container, HStack } from '@chakra-ui/react';
import { tokens } from 'design-tokens';
import { ReactNode } from 'react';
import { MainHeader } from './main-header';
import { SideMenu } from './side-menu';

export const PageBasePC: React.FC<{children?: ReactNode}> = (props) => {
    return(
    <>
    <Container maxWidth={'100%'}>
      <MainHeader />
      <Box padding={tokens.padding.nomal}>
        <HStack>
          <Box width={'100%'} height={'100%'}>
              {props.children}
          </Box>
          {/**サイドメニュー */}
          <SideMenu />
        </HStack>
      </Box>
    </Container>
    </>
    );
}