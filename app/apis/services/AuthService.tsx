import * as Config from '../../configs/auth-config.json';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import moment from 'moment';
import { Alert } from 'react-native';

interface Token {
    access_token: string;
    refresh_token: string;
    grant_type: string;
    expired_at: string;//Date;
};

export interface AuthData {
    social_type: SocialType;
    tokens: Token;
};

export enum SocialType {
    GOOGLE,
    KAKAO,
    NAVER,
    FACEBOOK
};

/**
 * 
 * @param token social access token
 * @returns access token, refresh token published by api server  
 */
const getApiTokens = async (token: string): Promise<Token> =>{

    try{
        const tokens = await axios.post(
            Config.api_server_url,  // Server token verify endpoint
            token,
            { headers: { Authorization: `Bearer ${token}`} }
        );
        return new Promise((resolve) => {
            resolve({
                access_token: JSON.stringify(tokens.data.data.accessToken),
                refresh_token: JSON.stringify(tokens.data.data.refreshToken),
                grant_type: JSON.stringify(tokens.data.data.grantType),
                expired_at: JSON.stringify(tokens.data.data.accessTokenExpireDate)
            } as Token);
        });
    }catch(error){
        return new Promise((rg)=>{ {}});//throw new Error('toke')
    }
    
    
};

/**
 * 
 * @param authData 
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
        authData.tokens = await getApiTokens(_googleToken.idToken);
    }catch(error: any){
        if(error.code === statusCodes.SIGN_IN_CANCELLED){
            throw new Error("SIGN_IN_CANCELLED");
        }else if(error.code === statusCodes.IN_PROGRESS){

        }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){

        }else{

        }
    }finally{
        
    }
};

/**
 * 
 * @param authData 
 */
const kakaoSignIn = async (authData: AuthData) => {
    try{
        

        //authData.tokens = await getApiTokens(_kakaoToken.accessToken);
    }catch(error){

    }finally{
        
    }
};

/**
 * 
 * @param authData 
 */
const naverSignIn = async (authData: AuthData) => {
    try{
        

        //authData.tokens = await getApiTokens(_naverToken.accessToken);
    }catch(error){

    }finally{
        
    }
};

/**
 * 
 * @param social_type 
 * @returns 
 */
const signIn = async (social_type: SocialType): Promise<AuthData> => {

    let authData: AuthData = {} as AuthData;

    try{
        switch(social_type){
            case SocialType.GOOGLE:
                await googleSignIn(authData);
                break;
            case SocialType.KAKAO:
                await kakaoSignIn(authData);
                break;
            case SocialType.NAVER:
                await naverSignIn(authData);
                break;
            default:
                break;
        }
    }catch(error){
        throw new Error('sign');//return Promise.reject(authData);
    }
    return new Promise((resolve) => {
        resolve(authData);
    });
};

const updateAccessToken = async (authData: AuthData) => {
    try {
        const newAccessToken = await axios.post(
            Config.api_server_url,
            "body",
            { headers: { Authorization: `Bearer ${authData.tokens.refresh_token}`} }
        );
        authData.tokens.access_token = newAccessToken.data;
    } catch (error) {
        
    }
}

const isTokenExpired = (authData: AuthData): boolean => {
    return moment(authData.tokens.expired_at).diff(moment()) <= 0;
}

export const authService = {
    signIn, updateAccessToken, isTokenExpired
};
