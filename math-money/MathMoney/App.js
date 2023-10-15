import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Login from './screens/Login';
import { Home } from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
<NavigationContainer>
  <Stack.Navigator screenListeners={{headerShown: false}}>

  <Stack.Screen
  name="Login"
  component={Login}
  options={{headerShown: false}}/>

  <Stack.Screen
  name="Home"
  component={Home}
  options={{headerShown: false}}/>

  </Stack.Navigator>
</NavigationContainer>
    </>
  );
}


