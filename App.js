/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text, TextInput
  
} from 'react-native';

const App: () => React$Node = () => {
  const [text, setName] = useState('');

  const handgleNameChange = (text) => {
    setName(text);
  };
  
  return (
    <View>
      <SafeAreaView>
        <TextInput
          placeholder="Enter Name:"
          onChangeText={(text) => handgleNameChange(text)}
        />
        <TextInput>Hello</TextInput>
      </SafeAreaView>
    </View>
  );
};

export default App;
