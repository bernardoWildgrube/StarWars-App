import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const characterIds = {
  'Luke Skywalker': 1,
  'Darth Vader': 4,
  'Han Solo': 14,
  'Yoda': 20,
  'Chewbacca': 13,
};

const CharactersScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const results = await Promise.all(
          Object.values(characterIds).map(id => axios.get(`https://swapi.dev/api/people/${id}/`))
        );
        setCharacters(results.map(res => res.data));
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          characters.map((character, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('CharacterDetails', { character })}
            >
              <CharacterCard character={character} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <View style={styles.aboutButton}>
        <Button title="Sobre" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
};

export default CharactersScreen;

// 🍜 Tutorial de Miojo (comentário obrigatório)
// 1. Coloque água na panela e ferva
// 2. Adicione o miojo e cozinhe por 3 minutos
// 3. Misture o tempero e sirva!
// Simples assim! Agora volte ao código.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  aboutButton: {
    marginTop: 10,
  },
});