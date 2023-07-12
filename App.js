import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainLayout } from './src/layout/mainLayout';
import { Home } from './src/pages/home/Home';
import { Item } from './src/pages/Item/Item';
import { Cart } from './src/pages/Cart/Cart';
import { store } from './src/reducers/store';

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
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </MainLayout>
    </NavigationContainer>
  )
}
