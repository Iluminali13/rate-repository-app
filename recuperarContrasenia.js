import React from "react"
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'



const recuperarContrasenia =() => {

  return (

    
    <View>
      <Text style={styles.title}> Recuperar contraseña</Text>
      <Text>En caso que no tenga cuenta, puede presionar Crear Cuenta</Text>

      <Text style= {styles.text} >Cuil:</Text>
      <TextInput style={styles.input} />

      <Text style= {styles.text} >Email:</Text>
      <TextInput style={styles.input} />

      


      <Text style={styles.text}  onPress={() => Alert.alert('enviar a recuperar cuenta ')} > Recuperar contraseña </Text>
    
      <Button style={styles.button}
        title="ingresar"
        onPress={() => Alert.alert('enviar a login ')}
      />

      <Text style={styles.text1} onPress={() => Alert.alert('enviar a crear cuenta ')}>Crear cuenta </Text>

    </View>
  )
}



const styles = StyleSheet.create({
  text1: {
    justifyContent:'center',
    alignContent: 'center',
    alignItems:'center',
    margin: 15,
    height: 20,
    fontSize: 15,
  },
  button:{
    color: '#1f62d5',
    margin: 20,
    height: 10,
  },
  text: {
    
    margin: 15,
    height: 20,
    fontSize: 15,
  },
  title: {
    margin: 50,
    fontSize: 31,
    height: 40,
    color: 'black'


  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#1f62d5'
  },
});

export default recuperarContrasenia;