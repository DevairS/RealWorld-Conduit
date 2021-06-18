import React, { useContext } from 'react';
import Login from './Login';
import { schemaValidation } from './validation';
import AuthContext from '../../Context/AuthContext';

const LoginContainer: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const submit = async (values: UserLogin): Promise<void> => {
    try {
      await signIn(values);
    } catch (error) {
      console.log(error);
    }
  };

  return <Login validationSchema={schemaValidation} submitForm={submit} />;
};

export default LoginContainer;
