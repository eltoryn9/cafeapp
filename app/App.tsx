import React from 'react';
import RootNavigator from './components/navigators/RootStack';
import { AuthProvider } from './context/auth/AuthContext';

export default function App() {
  return(
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
  );
}