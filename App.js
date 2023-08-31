import React from "react"
import { View, Text } from 'react-native';
import IniciarSesion from "./IniciarSesion";
import Registro from "./Registro";
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prueba from "./Prueba";
import recuperarContrasenia from "./recuperarContrasenia";



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

        <Stack.Screen 
        name="Prueba" 
        component={Prueba} />

      </Stack.Navigator>
    </NavigationContainer>
  );



  }
export default App;
