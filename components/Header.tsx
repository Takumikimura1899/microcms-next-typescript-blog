import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-teal-300 h-10 w-full">
      <nav>
        <Link href="/">
          <a className="text-white pr-10">My Blog</a>
        </Link>
        <Link href="/about">
          <a className="text-white">about</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
