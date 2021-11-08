import { GithubIcon } from './molecules/GithubIcon';
import { TwitterIcon } from './molecules/TwitterIcon';
import { ZennIconFooter } from './molecules/ZennIconFooter';

export const Footer = () => {
  const size = 25;
  return (
    <footer className='bg-teal-300 h-10  max-w-xl px-4 py-2 mx-auto flex justify-center items-center '>
      <GithubIcon size={size} />
      <TwitterIcon size={size} />
      <ZennIconFooter size={size} />
    </footer>
  );
};
