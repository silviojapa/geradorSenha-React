import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'acbdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function App(){

  const[password, setPassword] = useState('');
  const[size, setSize]= useState(10);

  function gerarSenha(){

    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);

  }

  function copiar(){
    Clipboard.setString(password);
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/img/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <Text style={styles.textInfo}>Escolha de 5 à 15 caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height:50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#7CFC00"
          maximumTrackTintColor="#3CB371"
          value={size}
          onValueChange={(valor)=>setSize(valor.toFixed(0))}
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== '' &&(
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copiar}> {password} </Text>
        </View>
      )}
      <View >
      <Text style={styles.autor}>Deve: Silvio Wanzeler Xavier</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
  },
  logo:{
    marginBottom:60
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#006400'
  },
  area:{
    marginTop:15,
    marginBottom:15,
    backgroundColor:'#fff',
    width:'80%',
    borderRadius:7
  },
  button:{
    backgroundColor:'#3CB371',
    width:'80%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7,
    marginBottom:25
  },
  buttonText:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },
  password:{
    padding:10,
    textAlign:'center',
    fontSize:20
  },
  autor:{
    marginTop:15,
    textAlign:'right',
    fontSize:16,
    color:'#3CB371'
  },
  textInfo:{
    marginTop:12,
    textAlign:'right',
    fontSize:14,
    color:'#3CB371'
  }
});
