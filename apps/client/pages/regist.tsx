import { Button } from 'components/buttons/button';
import { BlogTitleCard } from 'components/cards/blog-title-card';
import { Input } from 'components/inputs/input';
import { Label } from 'components/labels/label';
import { tokens } from 'design-tokens';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface RegisterInfo{
  mailAddress?: string;
  userName?: string;
  password?: string;
  isPublic: boolean;
}

const Index: NextPage = () => {
  const [loginState, setLoginState] = useState('new');
  const [info, setInfo] = useState<RegisterInfo>({
    mailAddress: undefined,
    userName: undefined,
    password: undefined,
    isPublic: false,
  });

  const router = useRouter();
  const commonTextProps = {
    width: '300px',
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInfo({...info, [name]: value});
    },
    marginBottom: tokens.space.nomal,
  };

  const post = async () => {
    try{
      const result = await axios.post('api/user', info);
      setLoginState('created');
    }
      catch
    {

    }
  };
  return (
    <>
     <Label>新規登録</Label>
     <hr/>
    {loginState === 'new' && (
      <>

     <Input
        label='メールアドレス'
        name='mailAddress'
        value={info.mailAddress}
        {...commonTextProps}
      />
      <Input
         label='表示するユーザー名'
         name='userName'
         value={info.userName}
         {...commonTextProps}
       />
      <Input
         label='パスワード'
         name='password'
         value={info.password}
         type='password'
         {...commonTextProps}
       />
       <Button buttonType='nomal' onClick={async()=>{
        await post();
       }}>登録</Button>
      </>
    )}

{loginState === 'created' && (
      <>
      <Label>
        登録完了
      </Label>
       <Button buttonType='nomal' onClick={()=>{router.push('/login')}}>ログイン画面へ</Button>
      </>
    )}
    </>
  )
}

export default Index;
