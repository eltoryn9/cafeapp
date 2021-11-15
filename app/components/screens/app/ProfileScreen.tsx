import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'; 
import { MainScreenProps } from './MainScreen';

const ProfileScreen: React.FC<MainScreenProps> = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    Profile
                </Text>
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

export default ProfileScreen;