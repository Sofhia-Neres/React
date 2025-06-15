import React from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, ScrollView } from 'react-native';

export default function ModalReceitas({ visible, onClose, receita }) {
  if (!receita) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.fundo}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titulo}>{receita.titulo}</Text>
            <Image source={{ uri: receita.img }} style={styles.imagem} />
            <Text style={styles.subtitulo}>Ingredientes:</Text>
            {receita.ingredientes.map((item, i) => (
              <Text key={i} style={styles.texto}>{item}</Text>
            ))}
          </ScrollView>

          <Button title="Fechar" onPress={onClose} color="#02779e" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});
