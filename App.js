import React from "react"
import { View, Text, Image } from 'react-native';
import IniciarSesion from "./IniciarSesion";
import Registro from "./Registro";
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prueba from "./Prueba";
import recuperarContrasenia from "./recuperarContrasenia";
import NuevoTurno from "./NuevoTurno";
import Especialidadess from "./Especialidadess"
import Header from "./component/Header";
import close from './assets/close.png'
import Hospital from './assets/Hospital.png'
import NuevoTurnoSegundaPersona from "./NuevoTurnoSegundaPersona";
import EsperarConfirmacion from './EsperarConfirmacion';
import SeleccionEstado from './SeleccionEstado';






const Stack = createNativeStackNavigator();

const App =() => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      
      screenOptions={{
        
        headerTitle: (props) => (
          <Image source={Hospital}  />
        ),
        headerStyle:{
          backgroundColor:'#1F62D7'
        }
      }}
    >
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

        <Stack.Screen 
        name="Especialidadess" 
        component={Especialidadess} />

        <Stack.Screen 
        name="Header" 
        component={Header} />

        <Stack.Screen 
        name="NuevoTurnoSegundaPersona" 
        component={NuevoTurnoSegundaPersona} />


        <Stack.Screen 
        name="EsperarConfirmacion" 
        component={EsperarConfirmacion} />


        <Stack.Screen 
        name="SeleccionEstado" 
        component={SeleccionEstado} />

        



        
      </Stack.Navigator>
    </NavigationContainer>
  );



  }
export default App;
