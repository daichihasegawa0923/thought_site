import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { tokens } from "design-tokens";

type ButtonType = 'positive' | 'nomal' | 'warn';

export interface ButProps extends ButtonProps{
    buttonType: ButtonType;
}

export const Button: React.FC<ButProps> = (props: ButProps) => {
    const type = (): {bgColor: string, color: string} => {
        switch(props.buttonType) {
            case 'nomal' :
                return { bgColor: tokens.bgColor.nomal, color: tokens.fontColor.black };
            case 'positive':
               return { bgColor: tokens.bgColor.positive, color: tokens.fontColor.white };
            case 'warn' : 
              return { bgColor: tokens.bgColor.negative, color: tokens.fontColor.white };
        }
    }
    return (<ChakraButton {...props} {...type()} >{props.children}</ChakraButton>);
}