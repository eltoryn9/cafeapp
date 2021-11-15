import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { AppScreens, AppTabParamList } from '../../navigators/AppStack';
import { useAuth } from '../../../context/auth/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';

type MainScreenNavigationProps = StackNavigationProp<
    AppTabParamList,
    AppScreens.Main
>;

export interface MainScreenProps{
    navigation: MainScreenNavigationProps;
}

const MainScreen: React.FC<MainScreenProps> = (props) => {
    const auth = useAuth();
    const signOut = async () => {
            auth.signOut();
    };

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.welcomeContainer}>
                
                {/* <Text>[ ACCESS TOKEN ] : {auth.authData?.tokens.access_token}</Text>
                <Text>[ REFRESH TOKEN ] : {auth.authData?.tokens.refresh_token}</Text>
                <Text>[ EXPIRED AT ] : {auth.authData?.tokens.expired_at}</Text> */}
                <Button title='sign out' onPress={signOut}/>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    btnNextContainer: {
        alignSelf: 'flex-end',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    welcome: {
        fontSize: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    }
})

export default MainScreen;