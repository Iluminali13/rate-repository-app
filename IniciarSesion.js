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


const IniciarSesion =({navigation}) => {
   
    return(
        <View style={styles.container}>

            <View style={[styles.box, styles.box1]}>
                <Text style={styles.Text}>Inicio de Sesion</Text>

                <Text style={styles.p}>En caso que no tenga cuenta, puede presionar Crear Cuenta</Text>
                
                </View> 


            <View style={[styles.box, styles.box2]}>
                
                <Text style= {styles.textInput} >Cuil:</Text>
                <TextInput style={styles.input} />
        
                <Text style={styles.textInput} >Clave:</Text>
                <TextInput style={styles.input} />

                <Text style={styles.TextClave} 
                
                onPress={() =>{
                    navigation.navigate('recuperarClave')
                }}> Recuperar clave</Text>

                


                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                    <View>
                        <Text style={styles.text_button}>Ingresar</Text>
                    </View>

                </TouchableOpacity>

                <Text style={styles.TextCrearCuenta} 
                
                onPress={() =>{
                    navigation.navigate('Registro')
                }}> Crear Cuenta</Text>
                
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
  export default IniciarSesion;





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
  