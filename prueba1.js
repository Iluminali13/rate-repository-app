/*import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const Especialidades = ({ visible, onClose }) => {
  const [especialidades] = useState([
    { id: 1, nombre: 'Cardiología' },
    { id: 2, nombre: 'Dermatología' },
    { id: 3, nombre: 'Endocrinología' },
    { id: 4, nombre: 'Gastroenterología' },
    { id: 5, nombre: 'Geriatría' },
    { id: 6, nombre: 'Ginecología' },
    { id: 7, nombre: 'Hematología' },
    { id: 8, nombre: 'Infectología' },
    { id: 9, nombre: 'Medicina General' },
    { id: 10, nombre: 'Nefrología' },
    { id: 11, nombre: 'Neumología' },
    { id: 12, nombre: 'Neurología' },
    { id: 13, nombre: 'Nutrición' },
    { id: 14, nombre: 'Oftalmología' },
    { id: 15, nombre: 'Oncología' },
    { id: 16, nombre: 'Ortopedia y Traumatología' },
    { id: 17, nombre: 'Otorrinolaringología' },
    { id: 18, nombre: 'Pediatría' },
    { id: 19, nombre: 'Psicología' },
    { id: 20, nombre: 'Psiquiatría' }
  ]);

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor:'#fff', paddingVertical:5, paddingHorizontal:5, marginHorizontal:5, marginTop:30, borderRadius:10 }}>
          <Text style={{ fontSize:20, fontWeight:'bold', marginBottom:5 }}>Especialidades</Text>
          {
            especialidades.map((especialidad) => (
              <TouchableOpacity key={especialidad.id} onPress={() => onClose(especialidad)}>
                <Text style={{ fontSize:16, marginBottom:'2%' }}>{especialidad.nombre}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    </Modal>
  );
};

export default Especialidades;
*/