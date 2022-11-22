import { Box } from '@chakra-ui/react';
import { tokens } from 'design-tokens';
import React from 'react';

export const Label: React.FC<{children: React.ReactNode}> = (props) => {
    return(
        <Box fontSize={tokens.fontSize.nomal} color={tokens.fontColor.nomal}>
            {props.children}
        </Box>
    );
}