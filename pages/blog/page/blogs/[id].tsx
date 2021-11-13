import Layout from '../../../../components/Layout';
import { client } from '../../../../libs/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import React from 'react';
import Pagination from '../../../../components/Pagination';
import { CategoryCard } from '../../../../components/molecules/CategoryCard';
import { PublishedAtCard } from '../../../../components/molecules/PublishedAtCard';

type Props = {
  blog: {
    title: string;
    category?: { name: string };
    category2?: { name: string };
    publishedAt: string;
    body: string;
  };
  highlightedBody: string;
  categories: string[];
};

export default function BlogId({ blog, highlightedBody, categories }: Props) {
  return (
    <Layout>
      <main>
        <h1>{blog.title}</h1>
        <section className='pb-8'>
          <div className='mb-2'>
            <CategoryCard
              categories={categories}
              category={blog.category?.name}
              category2={blog.category2?.name}
            />
          </div>
          <PublishedAtCard dateString={blog.publishedAt} />
        </section>
        <div dangerouslySetInnerHTML={{ __html: highlightedBody }} />
      </main>
    </Layout>
  );
}

// 静的生成の為のパスを指定する
export const getStaticPaths: GetStaticPaths = async () => {
  const data: { contents: { id: string }[] } = await client.get({
    endpoint: 'blog',
  });

  const paths = data.contents.map(
    (content) => `/blog/page/blogs/${content.id}`
  );
  return { paths, fallback: true };
};

// データをテンプレートにウケ渡す部分の処理を記述する
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data: any = await client.get({ endpoint: 'blog', contentId: id });
  const categories = await client
    .get({ endpoint: 'categories' })
    .then((res: any) => res.contents.map((category: any) => category.name));

  const $ = cheerio.load(data.body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
      categories,
    },
  };
};
