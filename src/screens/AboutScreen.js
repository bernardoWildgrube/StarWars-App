import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      <View style={styles.devBox}>
        <Text style={styles.name}>João Lucas</Text>
        <Text>RA: 123456789</Text>
        <Text>Email: joao.lucas@email.com</Text>
      </View>

      <View style={styles.devBox}>
        <Text style={styles.name}>Kauã</Text>
        <Text>RA: 987654321</Text>
        <Text>Email: kaua@email.com</Text>
      </View>

      <View style={styles.devBox}>
        <Text style={styles.name}>Bernardo Ferrão</Text>
        <Text>RA: 456789123</Text>
        <Text>Email: bernardo.f@email.com</Text>
      </View>

      <View style={styles.devBox}>
        <Text style={styles.name}>Marco Antonio</Text>
        <Text>RA: 789123456</Text>
        <Text>Email: marco.a@email.com</Text>
      </View>
    </View>
  );
};

export default AboutScreen;

// 🍜 Tutorial de miojo cooperativo:
// Divida as tarefas entre o grupo: um ferve a água, outro coloca o miojo,
// outro mexe o tempero e o último apresenta o trabalho. Pronto, 10 garantido.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  devBox: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});