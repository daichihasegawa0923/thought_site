
import {Box, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react';
import { tokens } from 'design-tokens';

export interface InputProps extends ChakraInputProps{
    label: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const width = props.width ?? '200px';
    return (
    <>
    <Box width={width}>
      <Box fontSize={tokens.fontSize.small}>{props.label}</Box>
      <ChakraInput {...props} width={width}/>
    </Box>
    </>);
   
}