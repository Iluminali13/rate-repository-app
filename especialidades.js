/*import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import prueba1 from './prueba1';

const Pantalla = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState(null);

  const handleEspecialidadSeleccionada = (especialidad) => {
    setModalVisible(false);
    setEspecialidadSeleccionada(especialidad);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Seleccionar especialidad</Text>
      </TouchableOpacity>
      <Especialidades visible={modalVisible} onClose={handleEspecialidadSeleccionada} />
      {
        especialidadSeleccionada && (
          <View>
            <Text>Especialidad seleccionada: {especialidadSeleccionada.nombre}</Text>
          </View>
        )
      }
    </View>
  );
};

export default Pantalla;
*/