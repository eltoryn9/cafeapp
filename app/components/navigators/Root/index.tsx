import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from '../AppStack';
import AuthStack from '../AuthStack';
import { useAuth } from '../../../context/Auth';
import { SplashScreen } from '../../screens/Splash'

const RootNavigator = () => {
    const { authData, isLoading } = useAuth();
    // TODO : Network 상태 유무에 따라 다음 과정 진행
    //const [status, setStatus] = useState()

    // if(!isConnected){
    //     return (<NetworkErrorScreen/>);
    // }

    if(isLoading){
        return (<SplashScreen/>);
    }
    return (
        <NavigationContainer>
            {authData ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
};

export default RootNavigator;