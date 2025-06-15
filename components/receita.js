import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Receitas({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.img }} style={styles.imagem} />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
