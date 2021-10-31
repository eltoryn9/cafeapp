import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignupScreen, { SignupParams } from '../../screens/Auth/SignupScreen';
import App from '../../App';

// App의 모든 Screen enum으로 정의
export enum AppScreens {
    Splash = 'Splash',
    Login = 'Login',
    Signup = 'Signup'
}

// 
export type AuthStackParamList = {
    Splash: undefined;
    Login: undefined;
    Signup: SignupParams;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={AppScreens.Splash} component={SplashScreen}/>
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen}/>
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;