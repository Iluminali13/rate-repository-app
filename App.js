import React from "react"
import { Text, View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hola capo como estas  </Text>
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

})




export default App;