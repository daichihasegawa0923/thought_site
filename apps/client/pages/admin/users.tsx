import { Button } from 'components/buttons/button';
import { Input } from 'components/inputs/input';
import { Label } from 'components/labels/label';
import { tokens } from 'design-tokens';
import { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Table, Td, Th, Tr } from '@chakra-ui/react';

interface User{
  mailAddress?: string;
  userName?: string;
  isPublic: boolean;
}

const Users: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loadState, setLoadState] = useState('loading');
    useEffect(()=>{
        (async() => {
            try{
            const getUsers = (await axios.get('/api/users')).data;
            setUsers(getUsers);
            setLoadState('success');
            }catch{
                setLoadState('failed');
            }
        })();
    },[]);
    return (<>
    {(users.length === 0 && loadState === 'loading') && (<>読み込み中・・・</>)}
    {(loadState === 'failed') && (<>読み込みに失敗しました。画面をリロードしてください。</>)}
    {(users.length === 0 && loadState === 'success') && (<>表示するデータがありません。</>)}
    {(users.length !== 0 && loadState === 'success') && (
        <Table>
            <Tr>
                <Th>
                    ユーザー名
                </Th>
                <Th>
                    メールアドレス
                </Th>
                <Th>
                    公開ユーザーか
                </Th>
            </Tr>
            {users.map((user, index)=>{return (
             <Tr key={`${index}_user_info`}>
               <Td>{user.userName}</Td>
               <Td>{user.mailAddress}</Td>
               <Td>{user.isPublic}</Td>
             </Tr>
            )})}
        </Table>
    )}
    </>)
}

export default Users;
