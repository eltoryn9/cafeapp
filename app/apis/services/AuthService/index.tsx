import * as Config from '../../../configs/auth-config.json';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import axios from 'axios';

export interface Tokens {
    access_token: string;
    refresh_token: string;
};

export interface AuthData {
    social_type: SocialType;
    tokens: Tokens;
    expired_at: string;
};

export enum SocialType {
    GOOGLE,
    KAKAO,
    NAVER,
    FACEBOOK
}

/**
 * 
 * @param socialAccessToken social access token
 * @returns access token, refresh token published by api server  
 */
const getApiTokens = async (socialAccessToken: string): Promise<Tokens> =>{
    const tokens = await axios.post(
        // Server token verify endpoint
        Config.api_server_url,
        socialAccessToken,
    );
    return new Promise((resolve) => {
        resolve({
            access_token: JSON.stringify(tokens),
            refresh_token: 'refresh token !!'
        });
    });
}

/**
 * 
 * @param authData 
 * @returns 
 */
const googleSignIn = async (authData: AuthData): Promise<void> => {
    GoogleSignin.configure({
        webClientId: Config.googleWebClientId,
        offlineAccess: true,
    });
    try{
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn();
        const _googleToken = await GoogleSignin.getTokens();

        authData.tokens = await getApiTokens(_googleToken.accessToken);
    }catch(error){

    }finally{
        
    }
};

const signIn = async (social_type: SocialType): Promise<AuthData> => {

    let authData: AuthData = {} as AuthData;

    if(social_type === SocialType.GOOGLE){
        await googleSignIn(authData);
    }

    return new Promise((resolve) => {
        resolve(authData);
    });
};

export const authService = {
    signIn
};
