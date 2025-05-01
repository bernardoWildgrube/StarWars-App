import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const FilmsScreen = ({ route }) => {
  const { urls } = route.params;
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const results = await Promise.all(
          urls.map(url => axios.get(url))
        );
        setFilms(results.map(res => res.data));
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (urls.length > 0) {
      fetchFilms();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : films.length === 0 ? (
        <Text style={styles.message}>Este personagem não aparece em nenhum filme.</Text>
      ) : (
        <ScrollView>
          {films
            .sort((a, b) => new Date(a.release_date) - new Date(b.release_date)) // ordena por data
            .map((film, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.title}>{film.title}</Text>
                <Text>Diretor: {film.director}</Text>
                <Text>Lançamento: {film.release_date}</Text>
              </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FilmsScreen;

// 🍜 Receita de miojo cinematográfica:
// 1. Pegue um balde de pipoca.
// 2. Substitua por miojo.
// 3. Assista todos os filmes enquanto o miojo cozinha.
// 4. Use os créditos finais para lavar a panela.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});