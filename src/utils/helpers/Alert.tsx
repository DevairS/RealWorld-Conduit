import React from 'react';
import { render } from 'react-dom';
import { Snackbar } from '../../components';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

type Props = {
  message: string;
  type: TypeOptions;
};

export default function showAlert({ message, type }: Props): void {
  const idElement = `alert-${Math.random()}`;
  render(
    <Snackbar
      message={message}
      type={type}
      id={`${idElement}`}
      key={`${idElement}`}
    />,
    document.getElementById('toastContainer'),
  );
}
