import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, ActivityIndicator, Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../../../context/Auth';
import axios from 'axios';
import { SocialType } from '../../../../apis/services/AuthService';

export const SignInScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [datas, setDatas] = useState('');
    const auth = useAuth();
    
    // const signIn = async (social_type: SocialType): Promise<void> => {
    //     GoogleSignin.configure({
    //         //scopes: '',
    //         webClientId: '844235026468-5gqhigsogpko3lhk6auts1oohbmf8f0t.apps.googleusercontent.com',
    //         offlineAccess: true,
    //         hostedDomain: '',
            
    //     });
    //     setIsLoading(true);
    //     try{
    //         await GoogleSignin.hasPlayServices();
    //         await GoogleSignin.signIn();
    //         const token = await GoogleSignin.getTokens();
    //         setIsLoading(false);
            
    //         const rtn:string = await axios.post(
    //             'https://d3f8-116-39-65-120.ngrok.io/hello/google',
    //             token.accessToken,
    //         );
            
    //     }catch(error){

    //     }
    //     finally{
    //     }
    // };

    const signIn = async () => {
        setIsLoading(true);
        //auth.authData?.social_type = socialType;
        await auth.signIn(SocialType.GOOGLE);
    }

    return (
        
        <View>
            <Text> {auth.authData?.tokens.access_token} </Text>
            { isLoading ? (
                <ActivityIndicator color={'#000'} animating={true} size={'small'} />
            ) : (
                <View style={styles.sectionContainer}>
                    <GoogleSigninButton
                        style={{width: 192, height:48}}
                        size={GoogleSigninButton.Size.Wide}
                        onPress={signIn}/>
                </View>
            )}
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