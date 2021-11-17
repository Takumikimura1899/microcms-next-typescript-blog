import Layout from '../../components/Layout';
import { client, key } from '../../libs/client';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import React from 'react';
import Pagination from '../../components/Pagination';
import { CategoryCard } from '../../components/molecules/CategoryCard';
import { PublishedAtCard } from '../../components/molecules/PublishedAtCard';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

interface Props {
  blog: Blog;
  highlightedBody: string;
  categories: string[];
  id: string;
}

interface Blog {
  title: string;
  category?: { name: string };
  category2?: { name: string };
  publishedAt: string;
  body: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

type category = {
  contents: { name: string }[];
};

export default function BlogId({
  blog,
  highlightedBody,
  categories,
  id,
}: Props) {
  return (
    <>
      <Head>
        <meta
          property='og:url'
          content={`https://microcms-next-typescript-blog.vercel.app/blog/${id}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`${blog.title}`} />
        <meta property='og:site_name' content={`${blog.title}`} />
        <meta
          property='og:description'
          content={`${blog.category?.name} ${blog.category2?.name}`}
        />
        <meta
          property='og:image'
          content='https://microcms-next-typescript-blog.vercel.app/images/computer-gc41ead480_1280.jpg'
        />
        <meta name='Twitte:card' content='Summary Card' />
        <meta name='twitter:site' content='@taku_19921219' />
      </Head>
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
    </>
  );
}

// 静的生成の為のパスを指定する
export const getStaticPaths = async () => {
  const count = await fetch(`https://taku1219.microcms.io/api/v1/blog`, key)
    .then((res) => res.json())
    .catch(() => null);

  const data = await client.get<{ contents: { id: string }[] }>({
    endpoint: 'blog',
    queries: { limit: count.totalCount },
  });

  // const key: any = {
  //   headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
  // };

  // const res = await fetch('https://taku1219.microcms.io/api/v1/blog', key);

  // const repos = await res.json();

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートにウケ渡す部分の処理を記述する
export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const id = context.params!.id;

  const data = await client.get<Blog>({
    endpoint: 'blog',
    contentId: id,
  });

  const categories = await client
    .get<category>({ endpoint: 'categories' })
    .then((res) => res.contents.map((category) => category.name));

  const $ = cheerio.load(data.body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      id,
      categories,
      blog: data,
      highlightedBody: $.html(),
    },
  };
};
