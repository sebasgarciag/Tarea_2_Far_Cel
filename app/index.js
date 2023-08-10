import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertirACelsius = () => {
    if (fahrenheit !== '') {
      const celsiusConvertido = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsiusConvertido.toFixed(2));
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Conversor de Temperatura</Text>
      <TextInput
        style={styles.entrada}
        placeholder="Grados Fahrenheit"
        keyboardType="numeric"
        value={fahrenheit}
        onChangeText={(valor) => setFahrenheit(valor)}
      />
      <Button title="Convertir" onPress={convertirACelsius} />
      {celsius !== '' && (
        <Text style={styles.textoResultado}>
          {fahrenheit} °F equivale a {celsius} °C
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  entrada: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textoResultado: {
    fontSize: 18.5,
    marginTop: 20,
  },
});

export default App;
