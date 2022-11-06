import { Button, HStack, VStack } from '@chakra-ui/react';
import { Input } from 'components/inputs/input';
import { NextPage } from 'next';
import { useState } from 'react';


const Login: NextPage = () => {
    const [state, setState] = useState({userName: '', password: ''});
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
          <Button width={'160px'}>ログイン</Button>
          </VStack>
        </>
    );
}

export default Login;