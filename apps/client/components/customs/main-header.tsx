import { Box, Center } from '@chakra-ui/react'
import { tokens } from 'design-tokens'

export const MainHeader: React.FC = () => {
    return(
        <Box 
        height={'200px'} 
        width={'100%'} 
        fontSize={'60px'}
        padding={tokens.padding} 
        bgColor={tokens.bgColor.positive}
        color={tokens.fontColor.white}
        >
            <Center height={'100%'} width={'100%'}>
            Foody
            </Center>
        </Box>
    )
}