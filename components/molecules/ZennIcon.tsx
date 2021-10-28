import HeaderContent from '../atoms/HeaderContent';
import { SiZenn } from 'react-icons/si';

const ZennIcon = () => {
  return (
    <>
      <HeaderContent link='https://zenn.dev/kimura141899'>
        <SiZenn className='text-blue-500 mr-1' />
        Zenn:MyPage
      </HeaderContent>
    </>
  );
};

export default ZennIcon;
