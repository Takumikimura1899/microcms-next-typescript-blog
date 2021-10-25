import Link from 'next/link';
import { Button, Container, Row, Col } from '@nextui-org/react';
import HeaderContent from './atoms/HeaderContent';

const Header = () => {
  return (
    <Container
      className='bg-teal-300 text-center text-2xl mb-2 py-1'
      display='flex'
      alignItems='center'
    >
      <Row>
        <Col className=' '>
          <HeaderContent link='/'>My Blog</HeaderContent>
        </Col>

        <Col className=''>
          <HeaderContent link='/about'>about</HeaderContent>
        </Col>

        <Col className=''>
          <HeaderContent link='https://zenn.dev/kimura141899'>
            Zenn:MyPage
          </HeaderContent>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
