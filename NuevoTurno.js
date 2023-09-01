import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Modal,
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

               <View style={{}}>
                <Text style={styles.p}>¿Para quien es este Turno?</Text>
                </View> 
            </View>
            
                     
                 
            <View style={[styles.box, styles.box2]}>

              <View style={{flexDirection:'row'}}>
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
                <View>
                  <Text style={styles.p1}>Seleccioona una Especialidad:</Text>
                </View>
                <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('Login')}>
                      <View>
                          <Text style={styles.text_button}>seleccione Especialidad</Text>
                      </View>

                  </TouchableOpacity>


                  <Modal 
                    //animacion al abrir y cerrar en este caso desde arriba hacia abajo
                      animationType="slide"
                      // llamado para cerrar el popup
                      onDismiss={() => console.log('close')}
                      //llamado para abrir el popup
                      onShow={() => console.log('show')}
                      transparent
                      //cuando se va a mostrar
                      visible={true}
                  >
                        <View 
                          style={{
                            flex:1,
                            backgroundColor: 'rgba(1,1,1, 0.5)',
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                          
                            <View
                              style={{
                                height:'80%',
                                width: '90%',
                                backgroundColor:'#fff',
                              }}
                          
                            >
                                <View
                                  style={{
                                    height:45,
                                    width: '100%',
                                    flexDirection:'row',
                                    alignItems:'flex-end',
                                    justifyContent:'center',
                                    backgroundColor:'black',
                                    paddingHorizontal:10,
                                  }}
                              
                                >
                                  <TouchableOpacity style={{}}
                                    onPress={() => navigation.navigate('Login')}>
                                        <View>
                                            <Text style={styles.text_button}>seleccione Especialidad</Text>
                                        </View>

                                    </TouchableOpacity>


                                
                                </View>


                            </View>
                        </View>
                    
                    
                  </Modal>
            </View>



            <View style={[styles.box, styles.box3]}>

              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('Login')}>
                      <View>
                          <Text style={styles.text_button}>Solicitar Turno</Text>
                      </View>

                  </TouchableOpacity>
              </View>
                
                
            </View> 
        </View> 
    );
  }




const styles = StyleSheet.create({
//en este caso nos daran cuadrados iguales si queremos una "estructura" buena poner  box1: flex1 , box: 2 flex5 0 6 
  list:{
    fontSize:30,
    margin: 50
  },
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
    
    marginTop:20,
    fontSize:17,

  },


  p1:{
    marginTop:20,
    fontSize:17,

  },

//content
  box2: {
    flex:3,
    alignItems:'center',
    
    
  },

  button:{

    marginTop:12,
    marginLeft:10,
    marginRight:10,
    margin:10,
    backgroundColor:'#1f62d7',
    padding:13,
    
    bottom:0,
    
},
text_button:{

    fontSize:20,
   alignSelf: 'center',
    color: 'white',


},


  box3: {
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});

export default NuevoTurno;