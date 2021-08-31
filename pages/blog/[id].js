import Layout from '../../components/Layout';
import { client } from '../../libs/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogId({ blog }) {
  const timestamp = dayjs
    .utc(blog.publishedAt)
    .tz('Asia/Tokyo')
    .format('YYYY-MM-DD');
  return (
    <Layout>
      <main>
        <h1>{blog.title}</h1>
        <p>
          <span>カテゴリー: </span>
          {blog.category && `${blog.category.name}`}
        </p>
        <p className="pb-8">投稿日時:{timestamp}</p>
        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
      </main>
    </Layout>
  );
}

// 静的生成の為のパスを指定する
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートにウケ渡す部分の処理を記述する
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
