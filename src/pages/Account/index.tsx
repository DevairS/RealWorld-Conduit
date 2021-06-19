import React, { useContext } from 'react';
import Account from './Account';
import { schemaValidation } from './validation';
import AuthContext from '../../Context/AuthContext';
import showAlert from '../../utils/helpers/Alert';
import { UserApi } from '../../api';

const AccountContainer: React.FC = () => {
  const { user } = useContext(AuthContext);
  const userApi = UserApi.getInstance();

  const initialValues = {
    username: user?.username || '',
    bio: user?.bio || '',
    image: user?.image || '',
    email: user?.email || '',
    password: '',
  };

  const submit = async (user: UserUpdate): Promise<void> => {
    try {
      console.log(user);
      userApi.updateUser(user);
      showAlert({
        message: 'Dados do seu usuário atualizado com sucesso',
        type: 'success',
      });
    } catch (error) {
      showAlert({ message: 'Erro ao atualizar o usuário', type: 'error' });
    }
  };

  return (
    <Account
      userLogged={initialValues}
      validationSchema={schemaValidation}
      submitForm={submit}
    />
  );
};

export default AccountContainer;
