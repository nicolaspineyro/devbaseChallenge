import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appRoutes} from './Routes';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {appRoutes.map((routeProps, index) => (
          <Stack.Screen {...routeProps} key={`root-${index}`} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
