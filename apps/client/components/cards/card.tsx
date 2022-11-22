import React, { ReactNode } from 'react';
import { Box, ChakraProps } from '@chakra-ui/react';
import {tokens} from 'design-tokens';

export interface CardProps extends ChakraProps{
    children?: ReactNode;
    onClick?: React.MouseEventHandler
}

export const Card: React.FC<CardProps> = (props) => {


    return (
        <Box
        {...props}
        display={'inline-block'}
        padding={tokens.padding.nomal} 
        fontSize = {tokens.fontSize.nomal} 
        borderRadius={tokens.round.nomal}
        onClick={props.onClick}
        role={'button'}
        borderWidth={'0px 1px 2px 0px'}
        borderColor={'#ccc'}
        >
            {props.children}
        </Box>
    );
};