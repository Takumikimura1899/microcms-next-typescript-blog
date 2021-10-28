import Link from 'next/link';

type Props = {
  link: string;
};

const HeaderContent: React.FC<Props> = ({ children, link }) => {
  return (
    <div className='flex justify-center'>
      <Link href={link}>
        <a className='text-gray-200 flex '>{children}</a>
      </Link>
    </div>
  );
};

export default HeaderContent;
