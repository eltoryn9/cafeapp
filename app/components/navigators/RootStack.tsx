import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../screens/common/SplashScreen'
import { useAuth } from '../../context/auth/AuthContext';
import { useNetInfo } from '@react-native-community/netinfo';
import NetworkErrorScreen from '../screens/common/NetworkErrorScreen';

const RootNavigator = () => {
    const { isLoading, isSignedIn } = useAuth();
    const netInfo = useNetInfo();

    if(!netInfo.isConnected){
        return (<NetworkErrorScreen/>);
    }
    if(isLoading){
        return (<SplashScreen/>);
    }
    return (
        <NavigationContainer>
            {isSignedIn ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
};

export default RootNavigator;