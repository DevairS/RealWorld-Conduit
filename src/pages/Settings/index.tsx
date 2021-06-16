import React from 'react';
import Settings from './Settings';
import { schemaValidation } from './validation';

const settingsContainer: React.FC = () => {
  const submit = async (values: UserLogin): Promise<void> => {
    console.log(values);
  };

  return <Settings validationSchema={schemaValidation} submitForm={submit} />;
};

export default settingsContainer;
