import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      <View style={styles.devBox}>
        <Text style={styles.name}>Bernardo Oliveira</Text>
        <Text>RA: 1136702</Text>
        <Text>Email: bernardo.oliveira@email.com</Text>
      </View>

      <View style={styles.devBox}>
        <Text style={styles.name}>Kauã Thessari</Text>
        <Text>RA: 1136116</Text>
        <Text>Email: kaua.thessari@email.com</Text>
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