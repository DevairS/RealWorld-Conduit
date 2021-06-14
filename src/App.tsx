import React from 'react';
import TestComp from './components/TestComp';
import { AuthProvider } from './Context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <TestComp />
    </AuthProvider>
  );
};
export default App;
