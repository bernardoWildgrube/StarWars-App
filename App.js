import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharactersScreen from './src/screens/CharactersScreen';
import CharacterDetailsScreen from './src/screens/CharacterDetailsScreen';
import StarshipsScreen from './src/screens/StarshipsScreen';
import FilmsScreen from './src/screens/FilmsScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen 
          name="Characters" 
          component={CharactersScreen} 
          options={{ title: 'Personagens' }}
        />
        <Stack.Screen 
          name="CharacterDetails" 
          component={CharacterDetailsScreen} 
          options={{ title: 'Detalhes do Personagem' }}
        />
        <Stack.Screen 
          name="Starships" 
          component={StarshipsScreen} 
          options={{ title: 'Naves' }}
        />
        <Stack.Screen 
          name="Films" 
          component={FilmsScreen} 
          options={{ title: 'Filmes' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Sobre' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}