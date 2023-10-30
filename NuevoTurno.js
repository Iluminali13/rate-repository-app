import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import close from './assets/close.png'
import Modal from './component/modal';


/*tomamos el valor de la dimension mediante dimension, luego lo dividimos por 
la cantidad de espacios que querramos, y tendremos 3 cuadrados en este caso iguales
para usar como header, content, y footer*/ 
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;




 const NuevoTurno =({navigation}) => {


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'Especialidad 1',
    'Especialidad 2',
    'Especialidad 3',
    'Especialidad 4',
    'Especialidad 5',
    'Especialidad 1',
    'Especialidad 2',
    'Especialidad 3',
    'Especialidad 4',
    'Especialidad 5',
    'Especialidad 1',
    'Especialidad 2',
    'Especialidad 3',
    'Especialidad 4',
    'Especialidad 5',
    // Agrega más especialidades según tu necesidad.
  ];

  const selectSpecialty = (item) => {
    setSelectedSpecialty(item);
    setModalVisible(false);
  };

  const[view, setView] = useState(false)
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
                <Text style={styles.titulo}> Nuevo Turno</Text>

               <View style={styles.separacion1}>
                <Text style={styles.p}>¿Para quien es este Turno?</Text>
                </View> 
            </View>
            
                     
                 
            <View style={[styles.box, styles.box2]}>            
            
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('')}>
                      <View>
                          <Text style={styles.text_button}>Para mi</Text>
                      </View>

                  </TouchableOpacity>

              
                  <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('NuevoTurnoSegundaPersona')}>
                      <View>
                          <Text style={styles.text_button}>Para otro</Text>
                      </View>

                  </TouchableOpacity>
                
              </View>
              
                  <View style={styles.separacion}>
                    <Text style={styles.p1}>Seleccione su especialidad</Text>
                  </View>
                      <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{ marginTop:30,borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
                        >
                        <TextInput
                          placeholder="Seleccionar Especialidad"
                          editable={false} // El TextInput no es editable
                          value={selectedSpecialty}
                        />
                      </TouchableOpacity>

               
                   

                    <View >
                      

                      <Modal visible={modalVisible} animationType="slide">
                          <View style={styles.headercontainer}>
                          <Text style={styles.text_Header}>Selecciona una especialidad:</Text>
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                                      ><Image
                                      source={close}
                                      style={styles.btnClose}/>
                            </TouchableOpacity>
                            </View>
                        <View style={styles.container}>
                          
                          
                          
                          <FlatList style={styles.container}
                            data={specialties}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                              <TouchableOpacity onPress={() => selectSpecialty(item)}>
                                <Text style={styles.list}>{item}</Text>
                              </TouchableOpacity>
                            )}
                          />
                          
                                            
                          
                        </View>
                      </Modal>
                    </View>
                  
            </View>

          

            <View style={[styles.box, styles.box3]}>

            <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('EsperarConfirmacion')}>
                    
                    
                      <View>
                          <Text style={styles.text_button}>Solicitar turnos</Text>
                      </View>

                  </TouchableOpacity>
                
                
            </View> 
        </View> 
    );
  }




const styles = StyleSheet.create({
//en este caso nos daran cuadrados iguales si queremos una "estructura" buena poner  box1: flex1 , box: 2 flex5 0 6 
text_Header:{
  marginRight:112,
  fontSize:18,

},

separacion:{
  marginTop:30
  
},
separacion1:{
  marginTop:30,
  marginRight:60,
  
},

headercontainer:{
  height:45,
  width: '100%',
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center',
  paddingHorizontal:10,
},
btnClose: {
  
  
  width:30,
  height:30,
  tintColor: '#000'
},
button1:{

  marginTop:12,
  marginLeft:10,
  marginRight:10,
  margin:10,
  backgroundColor:'#d3d3d3',
  padding:13,
  
  bottom:0,
  
},
  list:{
    fontSize:30,
    margin: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 2,
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
text_button1:{

  fontSize:20,
 alignSelf: 'center',
  color: 'black',


},


  box3: {
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});

export default NuevoTurno;