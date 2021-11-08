import { FooterContent } from '../atoms/FooterContent';
import { AiFillGithub } from 'react-icons/ai';

export const GithubIcon = ({ size }: { size: number }) => {
  return (
    <>
      <FooterContent link='https://github.com/Takumikimura1899'>
        <AiFillGithub size={size} />
      </FooterContent>
    </>
  );
};
