import React, { createContext, useState, useContext, useEffect, useReducer} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthData, authService, SocialType } from '../../apis/services/AuthService';
import { MMKV } from "react-native-mmkv";
import { Alert } from "react-native";


/**
 *  유저 AuthContext 정보
 *  authData: 소셜타입, 토큰, 만료 시점 등
 *  
 */
interface AuthContextData {
    authData?: AuthData;
    isLoading: boolean;
    isSignedIn: boolean;
    signIn(socialtype: SocialType): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
   
    useEffect((): void => {
        loadStorageData();
    }, []);

    const loadStorageData = async (): Promise<void> => {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            
            if(authDataSerialized){
                const _authData: AuthData = JSON.parse(authDataSerialized);

                // if(authService.isTokenExpired(_authData)){
                //     Alert.alert(" EXPIRED !");
                // }else{
                //     Alert.alert(" NOT EXPIRED !");
                // }
                
                setAuthData(_authData);
                setIsSignedIn(true);
            }
        } catch (error) {
            //throw new Error('User data load failed');
            //return new Promise.reject();
        } finally{
            setIsLoading(false);
        }
    }

    const signIn = async (social_type: SocialType): Promise<void> => {  
        try{
            const _authData = await authService.signIn(social_type);
            setAuthData(_authData);
            setIsSignedIn(true);
            AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
        }catch(error){
            throw new Error('ddd')
        };
        
    };

    const signOut = async (): Promise<void> => {
        setAuthData(undefined);
        setIsSignedIn(false);
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <AuthContext.Provider value={{authData, isLoading, isSignedIn, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthContext, AuthProvider, useAuth };