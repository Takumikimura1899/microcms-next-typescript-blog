import Layout from '../../components/Layout';
import { client } from '../../libs/client';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  title: string;
  category: { name: string };
  publishedAt: string;
  body: string;
};

export default function BlogId({ blog }: { blog: Props }) {
  return (
    <Layout>
      <main>
        <h1>{blog.title}</h1>
        <section className="pb-8">
          <div className="mb-2">
            <span>
              カテゴリー<span className="mx-1">:</span>
            </span>
            {blog.category && `${blog.category.name}`}
          </div>
          <div className="flex">
            <span>
              投稿日時<span className="mx-1">:</span>
            </span>
            <Date dateString={blog.publishedAt} />
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
      </main>
    </Layout>
  );
}

// 静的生成の為のパスを指定する
export const getStaticPaths: GetStaticPaths = async () => {
  const data: { contents: { id: string }[] } = await client.get({
    endpoint: 'blog',
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートにウケ渡す部分の処理を記述する
export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params!.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
