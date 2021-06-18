import React from 'react';
import { Navbar, Footer, Card } from '../../components';

import {
  TextMain,
  TextSecondary,
  WrapperBanner,
  WrapperGlobalFeed,
  WrapperMain,
  WrapperTags,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <WrapperBanner>
        <TextMain>Conduit</TextMain>
        <TextSecondary>A place to share your knowledge.</TextSecondary>
      </WrapperBanner>

      <WrapperMain>
        <WrapperGlobalFeed>
          {/* <Card userName="Devair" userText="TESTE TESTE TESTE" /> */}
        </WrapperGlobalFeed>
        <WrapperTags>
          <p>tags aqui</p>
        </WrapperTags>
      </WrapperMain>
      <Footer />
    </>
  );
};

export default Home;
