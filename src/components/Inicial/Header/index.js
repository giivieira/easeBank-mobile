import React, { startTransition } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Image, StatusBar, ImageBackground } from 'react-native';
import fundo from '../../../assets/fundo.jpg'

const Inicial = () => (
  <View style={styles.container}>
    <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
      
    <View style={styles.containerIcon}>
            <Image source={require('../../../assets/iconBank.png')} />
          </View>
      
      <Text style={styles.title}>TRANSFORM YOUR {'\n'}
      FINANCIAL LIFE {'\n'}
      WITH THE POWER {'\n'}
      OF EASE {'\n'}
      TECHNOLOGY</Text>
      <TouchableOpacity style={styles.btn1}
        onPress={() => NavigationPreloadManager.navigate('criarConta')}
        >
        <Text style={styles.txt}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2}
        onPress={() => NavigationPreloadManager.navigate('Entrar')}
        >
        <Text style={styles.txt}>Entrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    alignSelf: 'flex-start',
    top: '65%',
    marginLeft: 20
  },
  btn1: {
    backgroundColor: '#000',
    width: 120,
    height: 40,
    borderRadius: 30,
    left: 220,
    top: '10%'
  },
  btn2: {
    backgroundColor: '#000',
    width: 120,
    height: 40,
    borderRadius: 30,
    left: 50,
    top: '5%'
  },
  txt: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 'bold'
  },
  containerIcon: {
    top: '-37%'
  }
});

export default Inicial;