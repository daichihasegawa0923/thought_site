import { BlogTitleCard } from 'components/cards/blog-title-card';
import { NextPage, GetServerSideProps } from 'next';

interface IndexProps{
  // FIXME: お試しで入れているだけなので、後で消す。
  query: string;
}

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    <BlogTitleCard url='#' title='今日得た教訓について' summary='教訓・・・というより、失敗したので忘れないようにメモ。'/>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
  return {props:{query: context.query}};
};



export default Index;
