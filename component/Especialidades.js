import React, { useState } from 'react';
import { Modal, Text, FlatList, Button, TouchableOpacity } from 'react-native';

const Especialidades = ({ onSpecialtySelect, setModalVisibleEspecialidades }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const specialties = [
    'Especialidad 1',
    'Especialidad 2',
    'Especialidad 3',
    // Agrega más especialidades según tu necesidad.
  ];

  const selectSpecialty = (item) => {
    onSpecialtySelect(item);
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'red' }}>
        <Text>Selecciona una especialidad:</Text>
        <FlatList
          data={specialties}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectSpecialty(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <Button title="Cerrar" onPress={() => setModalVisibleEspecialidades(false)} />
      </View>
    </Modal>
  );
};

Especialidades.open = ({ onSpecialtySelect, setModalVisibleEspecialidades }) => {
    setModalVisibleEspecialidades(true);
};

export default Especialidades;
