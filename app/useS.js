import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet } from 'react-native';
import { convertirACelsius } from './UtileriasS';

export default function App() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const handleConvert = () => {
    if (fahrenheit !== '') {
      const celsiusConvertido = convertirACelsius(parseFloat(fahrenheit));
      setCelsius(celsiusConvertido.toFixed(2));
    }
  };

  return (
    <>
      <Text style={styles.title}>Conversor de Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder="Grados Fahrenheit"
        keyboardType="numeric"
        value={fahrenheit}
        onChangeText={(value) => setFahrenheit(value)}
      />
      <Button title="Convertir" onPress={handleConvert} />
      {celsius !== '' && (
        <Text style={styles.resultText}>
          {fahrenheit} °F equivale a {celsius} °C
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 18.5,
    marginTop: 20,
  },
});
