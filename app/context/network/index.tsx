

import React, { createContext, useState, useContext, useEffect } from "react";
import { MMKV } from "react-native-mmkv";
import { Alert } from "react-native";


interface NetworkContextData {
    isConnected: boolean;
    connectionType: string;
}

const NetworkContext = createContext<NetworkContextData>({} as NetworkContextData);

const NetworkProvider: React.FC = ({children}) => {
    const [isConnected, setIsConnected] = useState(false);
    const [connectionType, setConnectionType] = useState('');
    
    useEffect((): void => {
  
    }, []);



    return (
        <NetworkContext.Provider value={{isConnected, connectionType}}>
            {children}
        </NetworkContext.Provider>
    );
};

const useNetwork = (): NetworkContextData => {
    const context = useContext(NetworkContext);

    if(!context){
        throw new Error('networkAuth must be used within an AuthProvider');
    }
    return context;
}

export { NetworkContext, NetworkProvider, useNetwork };