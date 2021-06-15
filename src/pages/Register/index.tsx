import React from 'react';
import Register from './Register';
import { schemaValidation } from './validation';

const RegisterContainer: React.FC = () => {
  const submit = async (values: User): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return <Register validationSchema={schemaValidation} submitForm={submit} />;
};

export default RegisterContainer;
