import React from 'react';
import { TextArea } from './styles';

type Props = {
  id: string;
  placeholder: string;
  value?: string;
  onChange: any;
};

const InputArea: React.FC<Props> = ({ id, placeholder, value, onChange }) => {
  return (
    <TextArea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={6}
    />
  );
};

export default InputArea;
