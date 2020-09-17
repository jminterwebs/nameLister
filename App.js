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
  Text, TextInput, Button 
  
} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [personList, setPersonList] = useState([])

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleAgeChange = (text) => {
    setAge(text);
  }

  const addPerson = ( ) => {
    setPersonList([...personList, {name: name, age: age}]);
    setName('')
    setAge('')
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
        <Button
          title="Submit Name and Age"
          onPress={addPerson}
        />
        
                </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
