import { Box } from '@chakra-ui/react';
import { Label } from 'components/labels/label';
import {useRouter} from 'next/router';
import { destroyCookie } from 'nookies';

export const SideMenu: React.FC = () => {
    const router = useRouter();
    const logout = () => {
        destroyCookie(null, 'token');
        router.push('/login');
    }
    return(
        <Box width={'320px'}>
            <Label><Box onClick={()=>{logout();}} role='button'>{'ログアウト'}</Box></Label>
        </Box>
    );
}