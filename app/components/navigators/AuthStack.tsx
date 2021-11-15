import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../screens/auth/SignInScreen';

export enum AuthScreens {
    SignIn = 'SignIn',
}

export type AuthStackParamList = {
    SignIn: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FC = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={AuthScreens.SignIn} component={SignInScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;