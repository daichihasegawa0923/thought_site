import { Box } from '@chakra-ui/react';
import { tokens } from 'design-tokens';
import { useRouter } from 'next/router';
import { Card } from './card';

export interface BlogTitleCardProps{
    title: string;
    summary: string;
    url: string;
}

export const BlogTitleCard: React.FC<BlogTitleCardProps> = (props)=> {
    const router = useRouter();
    return(
        <Card width={'100%'} onClick={()=>{router.push(`./${props.url}`);}}>
            <>
             <Box fontSize={tokens.fontSize.lerge}>
                 {props.title}
             </Box>
             <Box fontSize={tokens.fontSize.small}>
                 {props.summary}
             </Box>
            </>
        </Card>
        );
}