import React from 'react';

import { ButtonA } from './styles';

type TypeOptions = 'submit' | 'button' | 'reset';

type Props = {
  type: TypeOptions;
  text: string;
  onClick?: any;
};
const Button: React.FC<Props> = ({ text, type, onClick }) => {
  return (
    <ButtonA type={type} onClick={onClick}>
      {text}
    </ButtonA>
  );
};

export default Button;
