import { BlogTitleCard } from 'components/cards/blog-title-card';
import { NextPage, GetServerSideProps } from 'next';
import { withAuth } from 'util/withAuth';

const Index: NextPage = () => {
  return (
    <>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    <BlogTitleCard url='#' title='今日得た教訓について' summary='教訓・・・というより、失敗したので忘れないようにメモ。'/>
    <BlogTitleCard url='#' title='Blog始めました！' summary='こんにちは。'/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =  withAuth(async (_ctx) => {
  return {props:{}};
});



export default Index;
