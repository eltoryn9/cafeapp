import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../../../context/Auth';
import Icon from 'react-native-vector-icons';

import {
    HomeScreens,
    HomeTabParamList
} from '../../../navigators/AppStack';
import { ScrollView } from 'react-native-gesture-handler';

type MainScreenNavigationProps = StackNavigationProp<
    HomeTabParamList,
    HomeScreens.Main
>;

interface MainScreenProps{
    navigation: MainScreenNavigationProps;
}

const MainScreen: React.FC<MainScreenProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();
                    const signOut = async () => {
                        setIsLoading(true);
                        await auth.signOut();
                    };
    const {navigation} = props;
    const initialSymbol: string = "second";
    const [symbol, setSymbol] = useState<String>(initialSymbol);
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.welcomeContainer}>
                <Icon name='rockt'/>
                <Text>{auth.authData?.expired_at}</Text>
                <Text>{auth.authData?.tokens.access_token}</Text>
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