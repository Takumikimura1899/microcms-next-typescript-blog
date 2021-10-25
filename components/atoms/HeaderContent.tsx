import Link from 'next/link';

type Props = {
  children: string;
  link: string;
};

const HeaderContent: React.FC<Props> = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className='text-gray-200 text-center'>{children}</a>
    </Link>
  );
};

export default HeaderContent;
