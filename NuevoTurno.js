import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';


/*tomamos el valor de la dimension mediante dimension, luego lo dividimos por 
la cantidad de espacios que querramos, y tendremos 3 cuadrados en este caso iguales
para usar como header, content, y footer*/ 
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

 const NuevoTurno =({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
                <Text style={styles.titulo}> Nuevo Turno</Text>

                <Text style={styles.p}>¿Para quien es este Turno?</Text>
            </View>
                
                 
            <View style={[styles.box, styles.box2]}>


            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                    <View>
                        <Text style={styles.text_button}>Para mi</Text>
                    </View>

                </TouchableOpacity>

            
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                    <View>
                        <Text style={styles.text_button}>Para otro</Text>
                    </View>

                </TouchableOpacity>



            </View>



            <View style={[styles.box, styles.box3]}>
                
                
            </View> 
        </View> 
    );
  }




const styles = StyleSheet.create({
//en este caso nos daran cuadrados iguales si queremos una "estructura" buena poner  box1: flex1 , box: 2 flex5 0 6 
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  //header
  box1: {
    flex:1,
    marginTop:30,
      marginLeft:145,
  },
  titulo:{
    fontSize:20,

  },
  p:{
        
    fontSize:15,

  },

//content
  box2: {
    flex:3,
    
  },

  button:{
    marginTop:120,
    marginLeft:120,
    marginRight:120,
    margin:30,
    backgroundColor:'#1f62d7',
    padding:10,
    
    bottom:0,
    
},
text_button:{
    fontSize:20,
   alignSelf: 'center',
    color: 'white',


},


  box3: {
    
  }
});

export default NuevoTurno;