import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }: { navigation: any }) => (
  <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
    <View style={styles.overlay}>
      <Text style={styles.title}>WENDY PORTILLA</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="PRODUCTOS API"
            onPress={() => navigation.navigate('BottomTabs')}
            color="#1ABC9C" 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Equipos de Futbol"
            onPress={() => navigation.navigate('TopTabs')}
            color="#1ABC9C" 
          />
        </View>
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center', // Alinea los botones horizontalmente
  },
  buttonContainer: {
    width: '80%', // Ancho del contenedor del botón
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden', // Asegura que el botón no se salga del contenedor
  },
});

export default WelcomeScreen;
