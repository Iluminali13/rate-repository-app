import React, { useState } from 'react';
import { View, Text, Modal, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './component/modal/styles';

const Especialidadess = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'Especialidad 1',
    'Especialidad 2',
    'Especialidad 3',
    'Especialidad 4',
    'Especialidad 5',
    // Agrega más especialidades según tu necesidad.
  ];

  const selectSpecialty = (item) => {
    setSelectedSpecialty(item);
    setModalVisible(false);
  };

  return (
    <View >
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
      >
        <TextInput
          placeholder="Seleccionar Especialidad"
          editable={false} // El TextInput no es editable
          value={selectedSpecialty}
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.container2}>
          <Text>Selecciona una especialidad:</Text>
          <FlatList 
            data={specialties}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectSpecialty(item)}>
                <Text style={styles.list1}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Especialidadess;
