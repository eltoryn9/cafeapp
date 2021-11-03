import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import SignInScreen from '../../screens/Auth/SignInScreen';
import SplashScreen from '../../screens/SplashScreen';
import App from '../../App';

/**
 * 
 */
export enum AuthScreens {
    Splash = 'Splash',
    SignIn = 'SignIn',
    SignUp = 'SignUp'
}

// 
export type AuthStackParamList = {
    Splash: undefined;
    SignIn: undefined;
    SignUp: SignUpParams;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FC = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={AuthScreens.Splash} component={SplashScreen}/>
            <AuthStack.Screen name={AuthScreens.SignIn} component={SignInScreen}/>
            <AuthStack.Screen name={AuthScreens.SignUp} component={SignUpScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;