import React from 'react';
import { StyleSheet, View } from 'react-native';
import App from './useS';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}
