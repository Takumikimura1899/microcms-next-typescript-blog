import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/Layout';
import { client } from '../libs/client';
import Pagination from '../components/Pagination';

const PER_PAGE = 5;

type Props = {
  blog: {
    id: string;
    title: string;
    publishedAt: string;
  }[];
  totalCount: number;
};

export default function Home({ blog, totalCount }: Props) {
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
              <Link href={`/blog/page/blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <p className='text-gray-400'>
                <Date dateString={blog.publishedAt} />
              </p>
            </li>
          ))}
        </ul>
        {/* <Pagination totalCount={totalCount} PER_PAGE={PER_PAGE} /> */}
        <Link href={`/blog/page/1`}>
          <a>もっと見る</a>
        </Link>
      </section>
    </Layout>
  );
}

// type Context = {
//   text:string
// }
// export const getStaticProps: GetStaticProps = async () => {
//   const data: { contents: Props } = await client.get({
//     endpoint: 'blog',
//     queries: {
//       offset: 0,
//       limit: 5,
//     },
//   });
//   const  totalCount  = await client.getList<Context>({
//     totalCount:totalCount,
//   });

//   return {
//     props: {
//       blog: data.contents,
//       totalCount: totalCount.length,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
  };
  const data = await fetch(
    'https://taku1219.microcms.io/api/v1/blog?offset=0&limit=5',
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
