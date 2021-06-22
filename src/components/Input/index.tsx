import React from 'react';

import { InputA } from './styles';

type Props = {
  id: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange: any;
};
const Input: React.FC<Props> = ({ id, placeholder, type, value, onChange }) => {
  return (
    <InputA
      id={id}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
