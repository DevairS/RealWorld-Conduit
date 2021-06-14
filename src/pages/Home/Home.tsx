import React from 'react';
import { Navbar, Footer } from '../../components';

import {
  TextMain,
  TextPreview,
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
          <TextPreview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            accumsan in nisl nisi scelerisque. Volutpat commodo sed egestas
            egestas fringilla phasellus. Cursus mattis molestie a iaculis.
            Tellus cras adipiscing enim eu turpis egestas pretium aenean. Diam
            quam nulla porttitor massa id neque. Vitae turpis massa sed
            elementum tempus egestas. Et molestie ac feugiat sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames.
            Faucibus interdum posuere lorem ipsum dolor sit amet consectetur.
            Nunc sed blandit libero volutpat sed cras ornare arcu. Et malesuada
            fames ac turpis egestas. Neque gravida in fermentum et sollicitudin
            ac. Gravida in fermentum et sollicitudin ac orci phasellus.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean
            vel elit scelerisque mauris. Ante in nibh mauris cursus mattis
            molestie a iaculis at. Purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Interdum varius sit amet mattis vulputate
            enim nulla aliquet. Vivamus arcu felis bibendum ut tristique et
            egestas quis ipsum. Sit amet volutpat consequat mauris nunc congue.
            Urna porttitor rhoncus dolor purus non enim praesent elementum.
            Vestibulum lorem sed risus ultricies tristique nulla. Sollicitudin
            ac orci phasellus egestas tellus. Laoreet non curabitur gravida arcu
            ac tortor. Pulvinar neque laoreet suspendisse interdum consectetur
            libero id. Pulvinar elementum integer enim neque volutpat. Sed arcu
            non odio euismod lacinia at. Curabitur gravida arcu ac tortor
            dignissim convallis aenean. In tellus integer feugiat scelerisque.
            Fusce id velit ut tortor pretium viverra suspendisse potenti. Nam
            libero justo laoreet sit amet cursus sit amet dictum. Turpis massa
            tincidunt dui ut ornare lectus. Cras tincidunt lobortis feugiat
            vivamus at augue eget arcu dictum. Rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar. Scelerisque eu ultrices
            vitae auctor eu augue. Cursus eget nunc scelerisque viverra mauris
            in aliquam sem. Quam nulla porttitor massa id neque aliquam
            vestibulum morbi blandit. Cursus euismod quis viverra nibh cras
            pulvinar mattis nunc. Id porta nibh venenatis cras sed felis eget
            velit aliquet. Est ultricies integer quis auctor elit sed. Ut
            venenatis tellus in metus vulputate. Odio aenean sed adipiscing
            diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
            Id consectetur purus ut faucibus. At consectetur lorem donec massa
            sapien faucibus et molestie ac. Neque ornare aenean euismod
            elementum nisi quis eleifend. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Consectetur purus ut faucibus
            pulvinar. Dignissim enim sit amet venenatis urna cursus eget nunc.
            Proin sed libero enim sed faucibus turpis. Consectetur adipiscing
            elit ut aliquam purus sit amet luctus.
          </TextPreview>
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
