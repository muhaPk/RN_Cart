import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { MainLayout } from './src/client/layout/mainLayout';

import { Home } from './src/client/pages/home/Home';
import { Groups } from './src/client/pages/groups/Groups';
import { Group } from './src/client/pages/groups/Group';
import { store } from './src/client/src/reducers';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>

      <Navigator />
      <StatusBar backgroundColor='#354052' />

    </Provider>
  );
}

const Navigator = () => {

  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="Group" component={Group} />
        </Stack.Navigator>
      </MainLayout>
    </NavigationContainer>
  )
}
