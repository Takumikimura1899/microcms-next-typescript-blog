import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/Layout';
import { client } from '../libs/client';
import Pagination from '../components/Pagination';

type Props = {
  blog: {
    id: string;
    title: string;
    publishedAt: string;
  }[];
};

export default function Home({ blog }: Props, totalCount: number) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-xl pb-4'>
        <h2>Profile</h2>
        <p className='break-words'>2021年4月よりプログラミング学習を開始。</p>
      </section>
      <section className='text-xl pb-8'>
        <h2>MySkill</h2>
        <p className='break-words'>
          HTML/ CSS/ JavaScript/ TypeScript/ React/ Next.js/ PHP/ Git
        </p>
      </section>
      <section className='text-xl flex flex-col items-center'>
        <h2>-Blog-</h2>
      </section>
      <section className='text-xl pt-1'>
        <ul className='list-none p-0 m-0 flex flex-col items-center'>
          {blog.map((blog) => (
            <li
              className=' w-10/12 p-2 mx-1 mb-2 bg-green-200 rounded-xl'
              key={blog.id}
            >
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <small className='text-gray-400'>
                <Date dateString={blog.publishedAt} />
              </small>
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} />
      </section>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data: { contents: Props } = await client.get({ endpoint: 'blog' });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: { 'X-MICROCMS-API=KEY': process.env.API_KEY },
  };
  const data = await fetch(
    'https://your-service.microcms.io/api/v1/blog?offset=0&limit=5',
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
