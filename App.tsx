import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from 'react-native';
import Tts from 'react-native-tts'
// import GetInput from './GetInput';

const App = () => {
  const [input_text, setText] = useState('Hello World')
  const handleVoice = (input_text : string) => {
     Tts.speak(input_text)
  };
  <input/>

  return (
    <View style={styles.container}>
      <Text>Input Text for TTS </Text>
      <TextInput 
        style={styles.input}
        placeholder = 'Hello World'
        onChangeText={(val) =>setText(val) }
      />
      <TouchableHighlight 
        onPress={() => handleVoice(input_text)}
        style={{
          borderWidth : 1, 
          backgroundColor:'#c00',
          padding:5,
          borderColor:'#c00',
        }}>
      <Text style ={{color:'#fff', fontWeight:'bold'}}> Get TTS</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  input : {
    borderWidth : 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200
    }
  });

export default App;
