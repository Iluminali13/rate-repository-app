import React from "react";
import { StyleSheet,Button,Text,View,TouchableOpacity } from 'react-native';




const SeleccionEstado =({navigation}) => {

    return(
        <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('EsperarConfirmacion')}>
                    <View>
                        <Text style={styles.text_button}>Estado Pendiente</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('EsperarConfirmacion')}>
                    <View>
                        <Text style={styles.text_button}>Estado Confirmado</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('EsperarConfirmacion')}>
                    <View>
                        <Text style={styles.text_button}>Estado Terminado</Text>
                    </View>

                </TouchableOpacity>
        </View>
    )

}
    const styles = StyleSheet.create({


        button:{

            marginTop:12,
            marginLeft:10,
            marginRight:10,
            margin:10,
            backgroundColor:'#1f62d7',
            padding:13,
            
            bottom:0,
            
        },







});

export default SeleccionEstado;