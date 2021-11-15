import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../../context/auth/AuthContext';
import { SocialType } from '../../../apis/services/AuthService';

export const SignInScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();
  
    const signIn = async () => {
        setIsLoading(true);
        try{
            await auth.signIn(SocialType.GOOGLE);
        }catch(error){
            throw new Error('lg err')
        }
    }

    return (
        <View>
            {/* { isLoading ? (
                <View>
                <ActivityIndicator color={'#000'} animating={true} size={'large'} />
                </View>
            ) : ( */}
                <View style={styles.sectionContainer}>
                    <GoogleSigninButton
                        style={{width: 192, height:48}}
                        size={GoogleSigninButton.Size.Wide}
                        onPress={signIn}/>
                </View>
            {/* )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})