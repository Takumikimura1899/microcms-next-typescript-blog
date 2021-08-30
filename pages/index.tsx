import { GetStaticProps } from 'next';
import Link from 'next/link';
import { client } from '../libs/client';

type Props = {
  blog: {
    id: string;
    title: string;
  }[];
};

export default function Home({ blog }: Props) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: { contents: string } = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
