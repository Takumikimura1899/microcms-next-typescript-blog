import { FooterContent } from '../atoms/FooterContent';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const TwitterIcon = ({ size }: { size: number }) => {
  return (
    <>
      <FooterContent link='https://twitter.com/taku_19921219'>
        <AiFillTwitterCircle size={size} />
      </FooterContent>
    </>
  );
};
