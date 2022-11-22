import { Box, Divider, HStack, VStack } from '@chakra-ui/react';
import { Button } from 'components/buttons/button';
import { Input } from 'components/inputs/input';
import { Label } from 'components/labels/label';
import { tokens } from 'design-tokens';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter} from 'next/router';


const Login: NextPage = () => {
    const [state, setState] = useState({userName: '', password: ''});
    const router = useRouter();
    return (
        <>
        <VStack align={'normal'}>
        <Input
          label='ユーザー名'
          type='text'
          name='user_name'
          width={'200px'}
          value={state.userName}
          onChange={(event)=>{
              const {value} = event.target;
              setState({...state,userName: value });
          }}/>
        <Input
          label='パスワード'
          type='password'
          name='password'
          width={'200px'}
          value={state.password}
          onChange={(event)=>{
              const {value} = event.target;
              setState({...state,password: value });
          }}/>
          <Button width={'160px'} buttonType='positive'>ログイン</Button>

          <Divider marginTop={tokens.space.wide00}/>

          <Label>アカウントをお持ちで無い場合は・・・</Label>
          <Button width={'160px'} buttonType='nomal' onClick={()=>{router.push('/regist')}}>新規登録</Button>
          </VStack>
        </>
    );
}

export default Login;