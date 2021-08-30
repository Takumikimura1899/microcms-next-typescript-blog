import { client } from '../../libs/client';

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog.category && `${blog.category.name}`}</p>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
    </main>
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
