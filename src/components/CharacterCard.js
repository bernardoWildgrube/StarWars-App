import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Altura: {character.height} cm</Text>
      <Text style={styles.info}>Peso: {character.mass} kg</Text>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});