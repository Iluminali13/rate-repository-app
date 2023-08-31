import React from "react"
import { View, Text } from 'react-native';
import IniciarSesion from "./IniciarSesion";
import Registro from "./Registro";
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prueba from "./Prueba";
import recuperarContrasenia from "./recuperarContrasenia";
import NuevoTurno from "./NuevoTurno";



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
        name="recuperarClave" 
        component={recuperarContrasenia} />

        <Stack.Screen 
        name="Login" 
        component={Login} />

        <Stack.Screen 
        name="Prueba" 
        component={Prueba} />


        <Stack.Screen 
        name="NuevoTurno" 
        component={NuevoTurno} />

      </Stack.Navigator>
    </NavigationContainer>
  );



  }
export default App;
