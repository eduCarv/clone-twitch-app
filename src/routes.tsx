import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },

        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen name="Seguindo" component={Following} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons 
              name="md-heart"
              size={size}
              color={focused ? colors.purple_dark : colors.black}
            />
          );
        }
      }} />
      <Screen name="Descubra" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons 
              name="compass-outline"
              size={size}
              color={focused ? colors.purple_dark : colors.black}
            />
          );
        }
      }} />
      <Screen name="Procurar" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Feather 
              name="copy"
              size={size}
              color={focused ? colors.purple_dark : colors.black}
            />
          );
        }
      }} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
