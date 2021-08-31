import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-teal-300 h-10  max-w-xl px-4 py-2 mx-auto ">
      <nav>
        <Link href="/">
          <a className="text-gray-100 pr-10">My Blog</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-100 pr-10">about</a>
        </Link>
        <Link href="https://zenn.dev/kimura141899">
          <a className="text-gray-100 ">Zenn:MyPage</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
