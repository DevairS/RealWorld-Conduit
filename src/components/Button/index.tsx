import React from 'react';

import { ButtonStyles } from './styles';

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  return <ButtonStyles>{text}</ButtonStyles>;
};

export default Button;
