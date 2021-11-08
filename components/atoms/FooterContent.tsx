import Link from 'next/link';

type Props = {
  link: string;
};

export const FooterContent: React.FC<Props> = ({ children, link }) => {
  return (
    <div className='flex justify-center'>
      <Link href={link}>
        <a className='text-gray-200 flex mx-2'>{children}</a>
      </Link>
    </div>
  );
};
