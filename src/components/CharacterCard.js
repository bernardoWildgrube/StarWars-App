import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const characterImages = {
  Luke: require('../../assets/images/luke.jpg'),
  Vader: require('../../assets/images/vader.jpg'),
  Han: require('../../assets/images/han.jpg'),
  Chewbacca: require('../../assets/images/chewbacca.jpg'),
  Yoda: require('../../assets/images/yoda.jpg'),
};

const CharacterCard = ({ name }) => {
  // Extrai apenas o primeiro nome, como 'Luke' de 'Luke Skywalker'
  const characterKey = name.split(' ')[0]; 
  const imageSource = characterImages[characterKey] || require('../../assets/images/luke.jpg');

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 60,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharacterCard;