import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import { SignInScreen } from '../../screens/Auth/SignInScreen';
import { SplashScreen } from '../../screens/Splash';

/**
 * 
 */
export enum AuthScreens {
    SignIn = 'SignIn',
    SignUp = 'SignUp'
}

// 
export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: SignUpParams;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FC = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={AuthScreens.SignIn} component={SignInScreen}/>
            <AuthStack.Screen name={AuthScreens.SignUp} component={SignUpScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;