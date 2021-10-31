import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';


export enum HomeScreens {
    Main = 'Main',
    Details = 'Details'
}

export type HomeStackParamList = {
    Main: undefined;
    Details: DetailsParams;
}

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator: React.FunctionComponent = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={HomeScreens.Main} component={MainScreen} />
        </HomeStack.Navigator>
    );
};
export default HomeStackNavigator;