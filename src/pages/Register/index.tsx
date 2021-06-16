import React from 'react';
import { UserApi } from '../../api';
import Register from './Register';
import { schemaValidation } from './validation';
import showAlert from '../../utils/helpers/Alert';

const RegisterContainer: React.FC = () => {
  const userApi = new UserApi();

  const submit = async (user: UserRegister): Promise<void> => {
    try {
      await userApi.createUser(user);
      showAlert({ message: 'Usuário criado com sucesso', type: 'success' });
    } catch (error) {
      showAlert({ message: 'Erro ao cadastrar usuário', type: 'error' });
    }
  };

  return <Register validationSchema={schemaValidation} submitForm={submit} />;
};

export default RegisterContainer;
