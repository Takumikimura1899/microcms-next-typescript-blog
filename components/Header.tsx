import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-indigo-500 h-10 w-full">
      <nav>
        <Link href="/">
          <a className="pr-10">My Blog</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
