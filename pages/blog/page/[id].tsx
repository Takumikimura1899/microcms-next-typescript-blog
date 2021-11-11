import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { Date } from '../../../components/date';
import Pagination from '../../../components/Pagination';

const PER_PAGE = 10;

type Props = {
  blog: {
    id: number;
    title: string;
    category?: { name: string };
    publishedAt: string;
    body: string;
  }[];
  highlightedBody: string;
  totalCount: number;
};

export default function BlogPageId({ blog, totalCount }: Props) {
  return (
    <Layout>
      <div>
        <ul className='list-none p-0 m-0 flex flex-col items-center'>
          {blog.map((blog) => (
            <li
              className='w-10/12 p-2 mx-1 mb-2 bg-green-200 rounded-xl'
              key={blog.id}
            >
              <Link href={`blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <small className='text-gray-400'>
                <Date dateString={blog.publishedAt} />
              </small>
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} PER_PAGE={PER_PAGE} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
  };

  const res = await fetch('https://taku1219.microcms.io/api/v1/blog', key);

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params!.id;

  const key: any = {
    headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
  };

  const data = await fetch(
    `https://taku1219.microcms.io/api/v1/blog?offset=${(id - 1) * 10}&limit=10`,
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
