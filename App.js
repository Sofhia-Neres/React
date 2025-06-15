import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Receitas from './components/receita.js';
import ModalReceitas from './components/modal'

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modal, setModal] = useState(false);
  const [home, setHome] = useState('cadastro');

  const [modalReceitaVisivel, setModalReceitaVisivel] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const receitas = [
    {
      id: '1',
      titulo: 'Bolo de Cenoura',
      descricao: 'Bolo fofinho e delicioso',
      img: 'https://assets.unileversolutions.com/recipes-v2/67405.jpg',
      ingredientes: [
        '3 cenouras',
        '3 ovos',
        '1 xícara de óleo',
        '2 xícaras de açúcar',
        '2 e 1/2 xícaras de farinha',
        '1 colher de fermento',
      ],
    },
    {
      id: '2',
      titulo: 'Lasanha de Carne',
      descricao: 'Lasanha caseira com queijo',
      img: 'https://tse4.mm.bing.net/th?id=OIP.keMgqkkDgoIxrzEjg_fQjwHaE8&pid=Api&P=0&h=180',
      ingredientes: [
        '500g carne moída',
        'Massa de lasanha',
        'Molho',
        'Queijo',
        'Presunto',
      ],
    },
    {
      id: '3',
      titulo: 'Salada de Frutas',
      descricao: 'Refrescante e saudável',
      img: 'https://tse4.mm.bing.net/th?id=OIP.MzTNkatgVf81xWNMu7aLDQHaE8&pid=Api&P=0&h=180',
      
    },
  ];

  function Enviar() {
    if (nome === '' || email === '' || senha === '') {
      setModal(true);
    } else {
      setHome('home');
    }
  }

  // Tela Home
  if (home === 'home') {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.main2}>
        <Text style={styles.titulo2}>Bem-vindo, {nome}!</Text>
      </View>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Receitas
            item={item}
            onPress={() => {
              setReceitaSelecionada(item);
              setModalReceitaVisivel(true);
            }}
          />
        )}
      />

      <ModalReceitas
        visible={modalReceitaVisivel}
        receita={receitaSelecionada}
        onClose={() => setModalReceitaVisivel(false)}
      />
    </View>
  );
}

  // Tela Cadastro
  return (
    <View style={styles.main}>
      <View style={styles.form}>
        <Text style={styles.titulo}>Criar conta</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholder="Nome:"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email:"
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          placeholder="Senha:"
          secureTextEntry={true}
        />

        <View>
          <Button title="Criar" onPress={Enviar} />
        </View>

        <Modal
          visible={modal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModal(false)}>
          <View style={styles.Modalfundo}>
            <View style={styles.modalContainer}>
              <Text style={styles.Modaltxt}>Preencha todos os campos!</Text>
              <Button
                title="Fechar"
                onPress={() => setModal(false)}
                color="#02779e"
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02779e',
  },

  form: {
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#59554e',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f7f7f7',
  },

  Modalfundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },

  Modaltxt: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },

  titulo2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  main2: {
    backgroundColor: '#81c9fa',
    padding: 20,
    justifyContent: 'center',
  },
});
