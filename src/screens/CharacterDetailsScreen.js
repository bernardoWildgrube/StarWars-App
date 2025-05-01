import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CharacterDetailsScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Altura: {character.height} cm</Text>
      <Text style={styles.info}>Peso: {character.mass} kg</Text>
      <Text style={styles.info}>Cabelo: {character.hair_color}</Text>
      <Text style={styles.info}>Pele: {character.skin_color}</Text>
      <Text style={styles.info}>Olhos: {character.eye_color}</Text>
      <Text style={styles.info}>Gênero: {character.gender}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Naves"
          onPress={() => navigation.navigate('Starships', { urls: character.starships })}
        />
        <Button
          title="Ver Filmes"
          onPress={() => navigation.navigate('Films', { urls: character.films })}
        />
      </View>
    </View>
  );
};

export default CharacterDetailsScreen;

// 🍜 Tutorial de Miojo (de novo nos comentários!)
// Ferva a água → coloque o miojo → mexa o tempero → coma e seja feliz.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});