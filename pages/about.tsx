import { Button, Container } from '@nextui-org/react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Zenn } from '../components/sample/reactIcons';

const About = () => {
  return (
    <>
      <Header />
      {/* // <Layout> */}
      {/* //   <div className='text-center mt-10'>about</div> */}
      <Container justify='center'>
        <Button auto>click</Button>
        <Zenn />
      </Container>
      {/* // </Layout> */}
    </>
  );
};

export default About;
