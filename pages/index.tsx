import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/Layout';
import { client } from '../libs/client';

type Props = {
  blog: {
    id: string;
    title: string;
    publishedAt: string;
  }[];
};

export default function Home({ blog }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl pb-4">
        <h2>Profile</h2>
        <p className="break-words">2021年4月よりプログラミング学習を開始。</p>
      </section>
      <section className="text-xl pb-8">
        <h2>MySkill</h2>
        <p className="break-words">
          HTML/ CSS/ JavaScript/ TypeScript/ React/ Next.js/ PHP/ Git
        </p>
      </section>
      <section className="text-xl">
        <h2>Blog</h2>
      </section>
      <section className="text-xl pt-1">
        <ul className="list-none p-0 m-0">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <small className="text-gray-400">
                <Date dateString={blog.publishedAt} />
              </small>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: { contents: Props } = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
