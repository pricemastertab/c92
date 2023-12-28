import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity  } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function FeedScreen(){
    const navigation = useNavigation(); 

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.titulo} >Tarefas</Text>

                <View>
                    <TouchableOpacity style={styles.criarRotina} onPress={() => {navigation.navigate('Create')}}>
                        <Text style={styles.buttonText} >Criar Rotina</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text>Nome</Text>
            <Text>Criador</Text>
            <Text>Rotina</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A9A9A9'
  },
  titulo: {
    fontSize: 50,
  },
  criarRotina: {
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'black',
    padding: 12,
    left: '35%',
  },
  buttonText: {
    color: 'white',
  },
  header: {
    flex: 0.15,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})