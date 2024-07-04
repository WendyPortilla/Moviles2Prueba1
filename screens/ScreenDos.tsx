import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import Informacion from '../components/Informacion';

const initialData = [
  { id: 1, name: 'Equipo A', detail: 'Detalle del Equipo A' },
  { id: 2, name: 'Equipo B', detail: 'Detalle del Equipo B' },
  { id: 3, name: 'Equipo C', detail: 'Detalle del Equipo C' },
];

const ScreenTwo = () => {
  const [data, setData] = useState(initialData);
  const [id, setId] = useState('');
  const [selectedData, setSelectedData] = useState<any>(null);

  const fetchDataById = () => {
    const item = data.find(d => d.id === parseInt(id));
    if (item) {
      setSelectedData(item);
    } else {
      Alert.alert('Error', 'Registro no encontrado');
    }
  };

  const handlePress = (id: number) => {
    const item = data.find(d => d.id === id);
    if (item) {
      Alert.alert('Detalle', item.detail);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar por ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el ID"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar" onPress={fetchDataById} />
      {selectedData && (
        <View style={styles.detail}>
          <Text>ID: {selectedData.id}</Text>
          <Text>Nombre: {selectedData.name}</Text>
          <Text>Detalle: {selectedData.detail}</Text>
        </View>
      )}

      <Text style={styles.title}>Lista de Registros</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Informacion data={item} onPress={handlePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  detail: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default ScreenTwo;
