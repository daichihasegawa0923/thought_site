import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import {tokens} from 'design-tokens';

export interface CardProps{
    children?: ReactNode;
    type?: 'positive' | 'negative' | 'disabled';
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <Box padding={tokens.padding.nomal} fontSize = {tokens.fontSize.nomal}>
            {props.children}
        </Box>
    );
};