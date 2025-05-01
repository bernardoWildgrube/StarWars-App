import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import api from '../services/api'; // ✅ Aqui usa o api.js
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
          Object.values(characterIds).map(id => api.get(`/people/${id}/`))
        );
        setCharacters(results.map(res => res.data));
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      } finally {
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

export default CharactersScreen;