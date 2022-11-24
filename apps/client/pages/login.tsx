import { Box, Divider, HStack, VStack } from '@chakra-ui/react';
import { Button } from 'components/buttons/button';
import { Input } from 'components/inputs/input';
import { Label } from 'components/labels/label';
import { tokens } from 'design-tokens';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter} from 'next/router';
import axios from 'axios';
import { setCookie } from 'nookies';


const Login: NextPage = () => {
    const [info, setInfo] = useState({userName: '', password: ''});
    const [state, setState] = useState<'yet'| 'failed' | 'success'>('yet');
    const router = useRouter();
    const login = async () => {
      try {
        const { data } = await axios.post('/api/login', info);
        setCookie(null, 'token', data);
        setState('success');
        router.push('/');
      } catch {
        setState('failed');
      }
    }
    return (
        <>
        {state === 'failed' && 
        (<Label><Box color={tokens.fontColor.red}>※ログインに失敗しました。</Box></Label>)}
        <VStack align={'normal'}>
        <Input
          label='ユーザー名'
          type='text'
          name='user_name'
          width={'200px'}
          value={info.userName}
          onChange={(event)=>{
              const {value} = event.target;
              setInfo({...info,userName: value });
          }}/>
        <Input
          label='パスワード'
          type='password'
          name='password'
          width={'200px'}
          value={info.password}
          onChange={(event)=>{
              const {value} = event.target;
              setInfo({...info,password: value });
          }}/>
          <Button
            width={'160px'}
            buttonType='positive' 
            onClick={async()=>{await login();}}>ログイン</Button>

          <Divider marginTop={tokens.space.wide00}/>

          <Label>アカウントをお持ちで無い場合は・・・</Label>
          <Button width={'160px'} buttonType='nomal' onClick={()=>{router.push('/regist')}}>新規登録</Button>
          </VStack>
        </>
    );
}

export default Login;