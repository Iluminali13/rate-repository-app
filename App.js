import React from "react"
import { View, Text } from 'react-native';
import IniciarSesion from "./IniciarSesion"
import Registro from "./Registro"
import recuperarContrasenia from "./recuperarContrasenia"
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator();

const App =() => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="iniciarSesion" 
        component={IniciarSesion} 
        />
        <Stack.Screen 
        name="Registro" 
        component={Registro} />

        <Stack.Screen 
        name="recuperarContrasenia" 
        component={recuperarContrasenia} />
        <Stack.Screen 
        name="Login" 
        component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );



  }
export default App;
