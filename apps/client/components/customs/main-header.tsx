import { Box, Center } from '@chakra-ui/react'
import { tokens } from 'design-tokens'
import Image from 'next/image';

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
             <Image src='/foody.png' alt='foody' width={512} height={256}/>
            </Center>
        </Box>
    )
}