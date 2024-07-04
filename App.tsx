// src/App.tsx
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenOne from './screens/ScreenUno';
import ScreenTwo from './screens/ScreenDos';
import WelcomeScreen from './screens/BienvenidoScreen';
import ScreenThree from './screens/ScreenTres';
import ScreenLista from './screens/ScreenLista';

type RootStackParamList = {
  Welcome: undefined;
  BottomTabs: undefined;
  TopTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const BottomTabsNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="PRODUCTOS DE VENTA" component={ScreenLista} />
    
  </BottomTab.Navigator>
);

const TopTabsNavigator = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Registro" component={ScreenOne} />
    <TopTab.Screen name="Informacion" component={ScreenTwo} />
    <TopTab.Screen name="Editar" component={ScreenThree} />

  </TopTab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabsNavigator} />
        <Stack.Screen name="TopTabs" component={TopTabsNavigator} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
