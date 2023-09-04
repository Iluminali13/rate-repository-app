import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, FlatList, Button} from 'react-native';

const Especialidades = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const especialidades = ['Especialidad 1', 'Especialidad 2', 'Especialidad 3'];

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const selectEspecialidad = (especialidad) => {
    setSelectedEspecialidad(especialidad);
    setInputValue(especialidad);
    closeModal();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Especialidad seleccionada: {selectedEspecialidad}</Text>
      <TextInput
        placeholder="Selecciona una especialidad"
        value={inputValue}
        onFocus={openModal}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Selecciona una especialidad:</Text>
          <FlatList
            data={especialidades}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectEspecialidad(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
          <Button title="Cancelar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Especialidades;
