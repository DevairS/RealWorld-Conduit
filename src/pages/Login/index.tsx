import React, { useContext } from 'react';
import Login from './Login';
import { schemaValidation } from './validation';
import AuthContext from '../../Context/AuthContext';
import showAlert from '../../utils/helpers/Alert';

const LoginContainer: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const submit = async (values: UserLogin): Promise<void> => {
    try {
      await signIn(values);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  return <Login validationSchema={schemaValidation} submitForm={submit} />;
};

export default LoginContainer;
