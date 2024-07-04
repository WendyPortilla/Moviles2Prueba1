// src/screens/ScreenThree.tsx
import * as React from 'react';
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Informacion from '../components/Informacion';

const initialData = [
  { id: '1', teamName: 'Team A', city: 'City A', stadium: 'Stadium A', founded: '1900' },
  { id: '2', teamName: 'Team B', city: 'City B', stadium: 'Stadium B', founded: '1920' },
  // Agrega más registros según sea necesario
];

const ScreenThree = () => {
  const [data, setData] = useState(initialData);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [teamName, setTeamName] = useState('');
  const [city, setCity] = useState('');
  const [stadium, setStadium] = useState('');
  const [founded, setFounded] = useState('');

  const handleEdit = () => {
    if (!teamName || !city || !stadium || !founded) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const updatedData = data.map(item => 
      item.id === selectedData.id 
        ? { ...item, teamName, city, stadium, founded } 
        : item
    );

    setData(updatedData);
    Alert.alert('Éxito', `El equipo ${teamName} se ha editado correctamente.`);
    setTeamName('');
    setCity('');
    setStadium('');
    setFounded('');
    setSelectedData(null);
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
            Alert.alert('Éxito', 'El equipo ha sido eliminado correctamente.');
          },
        },
      ],
      { cancelable: false },
    );
  };

  const handlePress = (item: any) => {
    setSelectedData(item);
    setTeamName(item.teamName);
    setCity(item.city);
    setStadium(item.stadium);
    setFounded(item.founded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar o Eliminar Equipo Deportivo</Text>
      {selectedData && (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del equipo"
            value={teamName}
            onChangeText={setTeamName}
          />
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={styles.input}
            placeholder="Estadio"
            value={stadium}
            onChangeText={setStadium}
          />
          <TextInput
            style={styles.input}
            placeholder="Fundado en"
            value={founded}
            onChangeText={setFounded}
          />
          <Button title="Guardar Cambios" onPress={handleEdit} />
        </View>
      )}

      <Text style={styles.title}>Lista de Registros</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Informacion data={item} onPress={() => handlePress(item)} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
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
  editContainer: {
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default ScreenThree;
