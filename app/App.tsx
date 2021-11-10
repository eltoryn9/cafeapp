import React from 'react';
import RootNavigator from './components/navigators/Root';
import { AuthProvider } from './context/Auth';

export default function App() {
  return(
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
  );
}