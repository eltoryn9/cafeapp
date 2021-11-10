import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../screens/App/MainScreen';
import ProfileScreen from '../../screens/App/ProfileScreen';

export enum HomeScreens {
    Main = 'Main',
    Profile = 'Profile'
};

export type HomeTabParamList = {
    Main: undefined;
    Profile: undefined;//ProfileParams;
};

const HomeTab = createBottomTabNavigator<HomeTabParamList>();
const HomeTabNavigator: React.FC = () => {
    return(
        <HomeTab.Navigator>
            <HomeTab.Screen name="Main" component={MainScreen} options={{tabBarBadge: 3}}/>
            <HomeTab.Screen name="Profile" component={ProfileScreen}/>
        </HomeTab.Navigator>
    );
};
export default HomeTabNavigator;