import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/app/MainScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export enum AppScreens {
    Main = '홈',
    찾기 = 'Search',
    Profile = 'Profile'
};

export type AppTabParamList = {
    홈: undefined;
    프로필: undefined;
    찾기: undefined;
    리뷰: undefined;
    찜: undefined;
};

const AppTab = createBottomTabNavigator<AppTabParamList>();
const AppTabNavigator: React.FC = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name="홈" component={MainScreen} options={{tabBarBadge: 3, tabBarActiveTintColor:'brown', tabBarIcon:({color, size}) => (<Icon name='home' color={color} size={size}/>)}}/>
            <AppTab.Screen name="찾기" component={ProfileScreen} options={{tabBarActiveTintColor:'brown', tabBarIcon: ({color, size}) => (<Icon name='location' color={color} size={size}/>)}}/> 
            <AppTab.Screen name="리뷰" component={ProfileScreen} options={{tabBarActiveTintColor:'brown',tabBarIcon: ({color, size}) => (<Icon name='cafe' color={color} size={size}/>)}}/>  
            <AppTab.Screen name="찜" component={ProfileScreen} options={{tabBarActiveTintColor:'brown',tabBarIcon: ({color, size}) => (<Icon name='heart' color={color} size={size}/>)}}/>  
            <AppTab.Screen name="프로필" component={ProfileScreen} options={{tabBarActiveTintColor:'brown',tabBarIcon: ({color, size}) => (<Icon name='person' color={color} size={size}/>)}}/>   
        </AppTab.Navigator>
    );
};
export default AppTabNavigator;