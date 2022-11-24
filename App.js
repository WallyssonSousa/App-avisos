import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';

//importIcone
import { AntDesign } from '@expo/vector-icons';


import Aviso from './src/Aviso';

export default function App() {
  const [aviso, setAvisos] = useState([]);
  const [list, setList] = useState([]);

  function handleAdd() {
    if (aviso === '') {
      return;
    }

    const dados = {
      key: Date.now(),
      item: aviso
    }

    setList(oldArray => [dados, ...oldArray]);

    setAvisos('')
  }

  function handleDelete(item) {
    let filtroItem = list.filter((aviso) => {
      return (aviso.item !== item)
    })
    setList(filtroItem)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avisos</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Deixe seu aviso...'
          placeholderTextColor='#303131'
          style={styles.input}
          value={aviso}
          onChangeText={(text) => setAvisos(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <AntDesign name="checkcircleo" size={26} color="black" />
        </TouchableOpacity>

      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Aviso data={item} deleteItem={() => handleDelete(item.item)} />}
        style={styles.list}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Verdana',
    marginTop: 30,
    borderBottomWidth: 3,
    color: '#D5A637',
    borderColor: '#D5A637',
    fontWeight: '400',
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#191919',
    borderWidth: 2,
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 40,
    marginRight: 60,
    fontWeight: '400',
    fontSize: 16,
    borderColor: '#D5A637',
    color: '#fff'

  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#D5A637',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    position: 'absolute',
    marginTop: 40,
    marginLeft: 290,

    //Android
    elevation: 4,
    //IOS
    shadowColor: '#D5A637',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.90,
    shadowRadius: 1.00,
  },
  list: {
    position: 'absolute',
    width: 350,
    height: 450,
    borderWidth: 2,
    borderColor: '#D5A637',
    marginTop: 200,
    //Android
    elevation: 4,
    //IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1.00,
    shadowRadius: 4.00,
  }

});