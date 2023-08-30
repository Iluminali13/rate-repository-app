import React from "react"
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'



const Registro =() => {

  return (

    
    <View>
      <Text style={styles.title}> Crea un usuario</Text>
      <Text>En caso que de que tenga una cuenta, puede presionar Iniciar Sesion</Text>

      <Text style= {styles.text} >Cuil:(obligatorio)</Text>
      <TextInput style={styles.input} />

      <Text style= {styles.text} >Email:(obligatorio)</Text>
      <TextInput style={styles.input} />

      <Text style= {styles.text} >Telefono:(obligatorio)</Text>
      <TextInput style={styles.input} />

      <Text style={styles.text} >Clave:(obligatorio)</Text>
      <TextInput style={styles.input} />

      <Text style={styles.text} >nuevamente ingrese su clave:(obligatorio)</Text>
      <TextInput style={styles.input} />

    
      <Button style={styles.button}
        title="Registrarte"
        onPress={() => Alert.alert('enviar a login ')}
      />

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

export default Registro;