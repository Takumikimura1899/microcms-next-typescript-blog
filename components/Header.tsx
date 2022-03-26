import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, Row, Col } from '@nextui-org/react';
import HeaderContent from './atoms/HeaderContent';
import ZennIcon from './molecules/ZennIcon';
import takutech from '../public/images/takutech.png';

const Header = () => {
  return (
    <>
      <div className='flex items-center text-center justify-center  '>
        <Image src={takutech} />
        <div className='text-center '>
          <span className='font font-serif text-white text-xl  '>
            日頃の学習の成果や困ったこと、
            <br /> 新発見などを投稿します。
          </span>
        </div>
      </div>
      <Container
        className='bg-teal-300  text-2xl mb-2 py-1'
        display='flex'
        alignItems='center'
      >
        <Row>
          <Col className=''>
            <HeaderContent link='/'>My Blog</HeaderContent>
          </Col>

          <Col className=''>
            <HeaderContent link='/about'>about</HeaderContent>
          </Col>

          <Col className=''>
            <ZennIcon />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
