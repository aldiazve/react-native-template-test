import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SimpleForm } from 'views';
import { MainStackParamList, ViewsNames } from 'routes';

const MainStackNavigator = createNativeStackNavigator<MainStackParamList>();

export const App: FC = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator initialRouteName={ViewsNames.Home}>
        <MainStackNavigator.Screen
          name={ViewsNames.Home}
          component={Home}
          options={{ title: 'BasicTemplate - Home' }}
        />
        <MainStackNavigator.Screen
          name={ViewsNames.FormExample}
          component={SimpleForm}
          options={{ title: 'BasicTemplate - Form example' }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};
