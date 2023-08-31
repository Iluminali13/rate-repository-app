import React from "react"
import { Text, View, StyleSheet, Image, Button, Alert,Dimensions,TouchableOpacity, TextInput} from 'react-native'

//maquetacion flex,
//toma la dimension de la pantalla y lo dejamos en una variable
var { height } = Dimensions.get('window');
//creamos una variable con un valor en el que quieras dividir tu pantalla
var box_count = 3;
//dividimos en este caso por 3 y nos dara 3 espacios iguales, para luego editar a gusto
//header, content, footer
var box_height = height / box_count;


const recuperarContrasenia =({navigation}) => {
   
    return(
        <View style={styles.container}>

            <View style={[styles.box, styles.box1]}>
                <Text style={styles.Text}>Recuperacion de clave</Text>

                <Text style={styles.p}>En caso de que tenga cuenta, puede presionar Iniciar sesion</Text>
                
                </View> 


            <View style={[styles.box, styles.box2]}>
                
                <Text style= {styles.textInput} >Cuil:</Text>
                <TextInput style={styles.input} />
        
                <Text style={styles.textInput} >Clave:</Text>
                <TextInput style={styles.input} />

                
                


                <TouchableOpacity style={styles.button}
                onPress={() => Alert.alert('Se te envio un mail para recuperar la contraseña')}>
                    <View>
                        <Text style={styles.text_button}>Enviar</Text>
                    </View>

                </TouchableOpacity>

                <Text style={styles.TextCrearCuenta} 
                
                onPress={() =>{
                    navigation.navigate('iniciarSesion')
                }}> Iniciar Sesion</Text>
                
                </View> 

            <View style={[styles.box, styles.box3]}></View> 
        </View>
    )

}



const styles = StyleSheet.create({

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
        marginTop:120,
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
        fontSize:20,
       marginLeft:20,
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
  export default recuperarContrasenia;