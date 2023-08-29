import React from "react"
import { Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
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




export default App;