import React from "react";
import { Modal,TouchableOpacity,View,Image } from 'react-native';

import { styles } from "./styles";
import close from '../../assets/close.png';


function ModalCustom ({ onDismiss = () => null, onShow = () => null, visible, children, onClose }) {
    
    return (
            <Modal 
                    //animacion slide al abrir y cerrar en este caso desde arriba hacia abajo con .fade aparece con transparencia 
                      animationType="slide"
                      // llamado para cerrar el popup
                      onDismiss={onDismiss}
                      //llamado para abrir el popup
                      onShow={onShow}
                      transparent
                      //cuando se va a mostrar
                      visible={visible}
            >
                        <View style={styles.container1}>
                            <View style={styles.subcontainer}>
                                <View style={styles.headercontainer}
                              
                                >
                                    <TouchableOpacity 
                                        onPress={onClose}
                                    >

                                            <Image
                                            source={close}
                                            style={styles.btnClose}/> 
                                    </TouchableOpacity>
                                </View>
                                {children}

                                
                            </View>
                        </View>
                    
            </Modal>
    );
}


export default ModalCustom;