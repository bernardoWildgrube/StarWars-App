import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const StarshipsScreen = ({ route }) => {
  const { urls } = route.params;
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const results = await Promise.all(
          urls.map(url => axios.get(url))
        );
        setStarships(results.map(res => res.data));
      } catch (error) {
        console.error('Erro ao carregar naves:', error);
      } finally {
        setLoading(false);
      }
    };

    if (urls.length > 0) {
      fetchStarships();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : starships.length === 0 ? (
        <Text style={styles.message}>Este personagem não possui naves disponíveis.</Text>
      ) : (
        <ScrollView>
          {starships.map((ship, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.name}>{ship.name}</Text>
              <Text>Modelo: {ship.model}</Text>
              <Text>Passageiros: {ship.passengers}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default StarshipsScreen;

// 🍜 Tutorial de miojo (edição espacial):
// Em uma nave, ferva água gravitacional, adicione miojo do planeta Terra,
// mexa com sabres de luz e aguarde 3 parsecs.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});