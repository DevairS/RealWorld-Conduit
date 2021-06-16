import React from 'react';
import Editor from './Editor';
import { schemaValidation } from './validation';

const EditorContainer: React.FC = () => {
  const submit = async (values: UserLogin): Promise<void> => {
    console.log(values);
  };
  return <Editor validationSchema={schemaValidation} submitForm={submit} />;
};

export default EditorContainer;
