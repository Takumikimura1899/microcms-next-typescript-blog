import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { Date } from '../../../components/date';
import Pagination from '../../../components/Pagination';
import { key } from '../../../libs/client';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { CategoryCard } from '../../../components/molecules/CategoryCard';
import BlogId from '../[id]';

const PER_PAGE = 5;

type Props = {
  blog: {
    id: string;
    title: string;
    category?: { name: string };
    category2?: { name: string };
    publishedAt: string;
    body: string;
  }[];
  highlightedBody: string;
  totalCount: number;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function BlogPageId({ blog, totalCount }: Props) {
  const router = useRouter();
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        {blog.map((blog) => (
          <div
            className='w-10/12 p-2 mx-1 mb-10 pb-10 bg-gradient-to-b from-green-200 rounded-xl cursor-pointer flex flex-col items-center text-center '
            onClick={() => {
              router.push(`/blog/${blog.id}`);
            }}
            key={blog.id}
          >
            {/* <Link href={`/blog/${blog.id}`}> */}
            <a className='text-4xl mb-4 text-black'>{blog.title}</a>
            <small className='text-gray-400 flex items-center mb-8'>
              <Date dateString={blog.publishedAt} />
              <CategoryCard
                category={blog.category?.name}
                category2={blog.category2?.name}
              />
            </small>

            <div
              className=' pt-4 line-clamp-3 !text-sm w-full px-4'
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />

            {/* </Link> */}
          </div>
        ))}
      </div>
      <Pagination totalCount={totalCount} PER_PAGE={PER_PAGE} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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
  const id = context.params.id;

  const data = await fetch(
    `https://taku1219.microcms.io/api/v1/blog?offset=${(id - 1) * 5}&limit=5`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  const count = await fetch(`https://taku1219.microcms.io/api/v1/blog`, key)
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
