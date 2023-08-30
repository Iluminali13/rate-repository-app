import React from "react"
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'



const App =() => {

  return (

    
    <View>
      <Text style={styles.title}> Inicio de Sesión</Text>
      <Text>En caso que no tenga cuenta, puede presionar Crear Cuenta</Text>

      <Text style= {styles.text} >Cuil:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text} >Clave:</Text>
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
    fontSize: 21,
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

/*const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hola capo como estas  </Text>
      <Image 
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}     
      />
    </View>
  );
};

//objeto y atributo, llamar al objeto ej styles. y su respectivo atributo container: styles.container
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#292929" 
  },
  title: { 
    fontSize: 30,
    color: 'green' 
  },
  image: {
    weight: 200, 
    width: 200
  }
})



*/
export default App;