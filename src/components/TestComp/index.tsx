import React, { useContext } from 'react';
import { Container } from './styles';
import AuthContext from '../../Context/AuthContext';

const TestComp: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  console.log(authenticated);
  return (
    <Container>
      <p>teste</p>
    </Container>
  );
};
export default TestComp;
