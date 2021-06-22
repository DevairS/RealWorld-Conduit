import React from 'react';

import { Wrapper, Text, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Text>
        Desenvolvido por:
        <Link href="https://github.com/DevairS"> Devair Augusto da Silva</Link>
      </Text>
    </Wrapper>
  );
};

export default Footer;
