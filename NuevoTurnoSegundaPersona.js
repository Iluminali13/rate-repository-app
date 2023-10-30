import React from "react"
import { Text, View, StyleSheet, Image, Button, Alert,Dimensions,TouchableOpacity, TextInput} from 'react-native'

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;


const NuevoTurnoSegundaPersona =({navigation}) => {
   
    return(
        <View style={styles.container}>

            <View style={[styles.box, styles.box1]}>
                <Text style={styles.Text}>Nuevo Turno Para Otro</Text>

                <Text style={styles.p}>Completá los datos de la persona que tomará el turno.</Text>
                
                </View> 


            <View style={[styles.box, styles.box2]}>
                
                <Text style= {styles.textInput} >Nombre:<Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />
        
                <Text style={styles.textInput} >Apellido: <Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput} >DNI: <Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput} >Correo Electronico:<Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput} >Telefono Movil:<Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput} >Obra Socal:<Text style={styles.textprueba}> (obligatorio)</Text></Text>
                <TextInput style={styles.input} />


                

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('EsperarConfirmacion')}>
                    <View>
                        <Text style={styles.text_button}>Solicitar Turno</Text>
                    </View>

                </TouchableOpacity>
                
                </View> 

            <View style={[styles.box, styles.box3]}></View> 
        </View>
    )

}



const styles = StyleSheet.create({
    textprueba:{
        fontSize:15,
        color:'red'

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#1f62d5'
      },
    
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    box: {
        flex:1,
      height: box_height //set this one 
    },
    //header
    box1: {
        marginTop:30,
      marginLeft:15,
      
    },
    //content
    box2: {
        flex: 3,
        margin:0,
      
    },
    button:{
        marginTop:20,
        marginLeft:120,
        marginRight:120,
        margin:30,
        backgroundColor:'#1f62d7',
        padding:10,
        
        bottom:0,
        
    },

    TextCrearCuenta:{
        fontSize:17,
       marginLeft:160,
        color: 'black',

    },
    TextClave:{
        fontSize:17,
       marginLeft:10,
        color: 'black',

    },
    textInput:{
        fontSize:15,
       marginLeft:10,
        color: 'black',

    },
    text_button:{
        fontSize:20,
       alignSelf: 'center',
        color: 'white',


    },
    
    //footer
    box3: {
        
    },
    Text:{
        fontSize:25,

    },
    p:{
        
        fontSize:15,

    },
  }); 

export default NuevoTurnoSegundaPersona;