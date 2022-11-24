import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { parseCookies } from 'nookies';
import axios from 'axios';

const authApiUrl = `${process.env.USER_SERVICE_HOST}/auth`;

// cookieの情報から認証できているかどうかを判定する
export const routeWithAuth = async (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    try{
        const {token} = parseCookies(ctx);
        const {data} = await axios.post(authApiUrl, { token });
        console.log(data);
        }catch{
            // 認証エラーになったら共生的にログイン画面に飛ばす
            ctx.res.writeHead(301, {Location: '/login'});
            ctx.res.end();
        }
}

export const withAuth = (
    func: (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => Promise<{
    props: {
        query: ParsedUrlQuery;
    };
}> | any) => async (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    await routeWithAuth(ctx);
    return await func(ctx);
}