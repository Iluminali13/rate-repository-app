import React from "react"
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native'



const Login =({navigation}) => {

return (
    <View style={styles.view}>
        <Text style={{fontSize: 30,}}> Turnos</Text>

        <Button style={styles.button}
          title="Nuevo Turno"
          onPress={() => navigation.navigate('Registro')}
        />
        <Button style={styles.button}
          title="Mis Turnos"
          onPress={() => navigation.navigate('Login')}
        />
    </View>
)

}


const styles = StyleSheet.create({

    view:{
        
        marginLeft:20,
        marginRight:20,
        flex:1,
        justifyContent: 'center',
        

    },
    button:{
    
        width:20,
        color: '#1f62d5',
        

    
      },
});

export default Login;