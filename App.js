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
  Text, TextInput, 
  
} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleAgeChange = (text) => {
    setAge(text);
  }

  return (
    <View>
      <SafeAreaView>
        <View>
        <TextInput
          placeholder="Enter Name:"
          onChangeText={(text) => handleNameChange(text)}
        />
        <TextInput
          placeholder="Enter Age"
          onChangeText={(text) => handleAgeChange(text)}
        />
        
                </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
