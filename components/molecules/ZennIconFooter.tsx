import { FooterContent } from '../atoms/FooterContent';
import { SiZenn } from 'react-icons/si';

export const ZennIconFooter = ({ size }: { size: number }) => {
  return (
    <>
      <FooterContent link='https://zenn.dev/kimura141899'>
        <SiZenn size={size} />
      </FooterContent>
    </>
  );
};
