import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  HomeTabNavigator from './navigators/HomeTabNavigator';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// import AuthFlowNavigator from './navigators/AuthFlowNavigatior';


export default function App() {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // const authContext = React.useMemo(()=> ({
  //   signIn: () => {
  //     setUserToken('asdf');
  //     setIsLoading(false);
  //   },
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //   },
  //   signUp: () => {
  //     setUserToken('asdf');
  //     setIsLoading(false);
  //   }
  // }));

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if(isLoading){

  // }<HomeTabNavigator/>
  return(
    // <SafeAreaView>    
    //   <View>
    //     <Text>hello</Text>
    //   </View>
    // </SafeAreaView>

    <NavigationContainer>
      <HomeTabNavigator/>
      {/* <nab.Navigator>
        <nav.Screen name='main' component={sc}></nav.Screen>
      </nab.Navigator> */}
    </NavigationContainer>
  );
}