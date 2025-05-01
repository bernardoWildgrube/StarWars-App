import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const characterImages = {
  'Luke Skywalker': require('../../assets/images/luke.png'),
  'Darth Vader': require('../../assets/images/vader.png'),
  'Han Solo': require('../../assets/images/han.png'),
  'Yoda': require('../../assets/images/yoda.png'),
  'Chewbacca': require('../../assets/images/chewbacca.png'),
};

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image
        source={characterImages[character.name]}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{character.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharacterCard;