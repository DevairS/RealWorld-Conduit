import React from 'react';
import Login from './Login';
import { schemaValidation } from './validation';

const LoginContainer: React.FC = () => {
  const submit = async (values: User): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };

  return <Login validationSchema={schemaValidation} submitForm={submit} />;
};

export default LoginContainer;
