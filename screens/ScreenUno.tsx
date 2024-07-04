import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-toast-message';

const ScreenOne = () => {
  const [teamName, setTeamName] = useState('');
  const [city, setCity] = useState('');
  const [stadium, setStadium] = useState('');
  const [founded, setFounded] = useState('');

  const handleRegister = () => {
    if (!teamName || !city || !stadium || !founded) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    
    Toast.show({
      type: 'success',
      text1: 'Registro exitoso',
      text2: `El equipo ${teamName} se ha registrado correctamente.`,
     
    });

    setTeamName('');
    setCity('');
    setStadium('');
    setFounded('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Equipo Deportivo</Text>
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
      <Button title="Registrar" onPress={handleRegister} />
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
});

export default ScreenOne;
