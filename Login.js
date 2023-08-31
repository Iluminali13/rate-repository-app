import React from "react"
import { Text, View, StyleSheet, Image, Button, Alert,Dimensions,TouchableOpacity} from 'react-native'

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;


const Login =({navigation}) => {
   
    return(
        <View style={styles.container}>

            <View style={[styles.box, styles.box1]}>
                <Text style={styles.Text}> Turnos</Text>
                </View> 


            <View style={[styles.box, styles.box2]}>
                
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Prueba')}>
                    <View>
                        <Text style={styles.text_button}>Nuevo Turno</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Registro')}>
                    <View>
                        <Text style={styles.text_button}>Mis Turnos</Text>
                    </View>

                </TouchableOpacity>
                
                </View> 

            <View style={[styles.box, styles.box3]}></View> 
        </View>
    )

}



const styles = StyleSheet.create({

    
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
      marginLeft:135,
      
    },
    //content
    box2: {
        margin:0,
      
    },
    button:{
        marginLeft:120,
        marginRight:120,
        margin:30,
        backgroundColor:'#1f62d7',
        padding:10,
        
        bottom:0,
        
    },
    text_button:{
        alignSelf:'center',
        color: '#FFFFFF',


    },
    
    //footer
    box3: {
        
    },
    Text:{
        fontSize:40,

    },
    
  }); 

   /* return (
        <View  style={styles.view}>
            <Text style={{fontSize: 30,}}> Turnos</Text>
            <View style={styles.view1}>
    
                <Button style={styles.button}
                title="Nuevo Turno"
                onPress={() => navigation.navigate('Registro')}
                />
                <Button style={styles.button}
                title="Mis Turnos"
                onPress={() => navigation.navigate('Prueba')}
                />
            </View>
        </View>
    )


}

const styles = StyleSheet.create({

    view1:{
        
        marginLeft:10,
        marginRight:10,
        flex:1,
        justifyContent: 'center',
        

    },
    view:{
        
        marginLeft:20,
        marginRight:20,
        flex:1,
        justifyContent: 'center',
        

    },
    button:{
        
        width:20,
        color: '#1f62d5',
        

    
      },
});*/


export default Login;