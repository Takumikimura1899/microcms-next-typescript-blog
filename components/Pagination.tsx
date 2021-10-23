import Router from 'next/router';
import Link from 'next/link';

type Props = {
  totalCount: number;
  PER_PAGE: number;
};

const Pagination = ({ totalCount, PER_PAGE }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <ul className='list-none p-0 m-0 flex justify-center items-center'>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
