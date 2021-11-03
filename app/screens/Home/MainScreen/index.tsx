import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack';

import {
    HomeScreens,
    HomeTabParamList
} from '../../../navigators/HomeTabNavigator';

type MainScreenNavigationProps = StackNavigationProp<
    HomeTabParamList,
    HomeScreens.Main
>;

interface MainScreenProps{
    navigation: MainScreenNavigationProps;
}

const MainScreen: React.FC<MainScreenProps> = (props) => {
    const {navigation} = props;
    const initialSymbol: string = "second";
    const [symbol, setSymbol] = useState<String>(initialSymbol);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Main Screen</Text>
            </View>
            
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