import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./components/SearchScreen"
import ListingScreen from "./components/ListingScreen"

function SearchStackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Listing" component={ListingScreen} />
    </Stack.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SearchStackNav/>
    </NavigationContainer>
  );
}