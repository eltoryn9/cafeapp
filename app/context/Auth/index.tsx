import React, { createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthData, authService, SocialType } from '../../apis/services/AuthService';
import { MMKV } from "react-native-mmkv";
import { is } from "@babel/types";


/**
 *  유저 AuthContext 정보
 *  authData: 소셜타입, 토큰, 만료 시점 등
 *  
 */
interface AuthContextData {
    authData?: AuthData;
    isLoading: boolean;
    isSignedIn: boolean;
    accessTokenExpired: boolean;
    signIn(social_type: SocialType): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [accessTokenExpired, setAccessTokenExpired] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async (): Promise<void> => {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if(authDataSerialized){
                const _authData: AuthData = JSON.parse(authDataSerialized);
                const _accessToken: String = _authData.tokens.access_token;
                
                setAuthData(_authData);
                setIsSignedIn(true);
            }
        } catch (error) {
            
        } finally{
            setIsLoading(false);
        }
    }

    const signIn = async (social_type: SocialType): Promise<void> => {  
        const _authData = await authService.signIn(social_type);
        setAuthData(_authData);
        setIsSignedIn(true);
        AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    };

    const signOut = async (): Promise<void> => {
        setAuthData(undefined);
        setIsSignedIn(false);
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <AuthContext.Provider value={{authData, isLoading, isSignedIn, accessTokenExpired, signIn, signOut}}>
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