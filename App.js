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
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableHighlight  
} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [personList, setPersonList] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')

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

  const deletePerson = (person) => {
    const removedList = personList.filter((_,index) => {
      return index !== person.index;
    });

    setPersonList(removedList);
  }

  const updatePerson = (person) => {
      setToggleModal(!toggleModal)
      setEditName(person.item.name)
      setEditAge(person.item.age)
  }

  const handleEditName = (text) => {
    setEditName(text)
  }  

  const handleEditAge = (text) => {
    setEditAge(text)
  }

  const closeModal = () => {
    setToggleModal(!toggleModal)
  }

  return (
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
        <Button title="Submit Name and Age" onPress={addPerson} />
      </View>
      <View>
        <FlatList
          data={personList}
          renderItem={(person, index) => (
            <View key={index}>
              <Text>Name: {person.item.name}</Text>
              <Text>Age: {person.item.age}</Text>
              <Button
                title="Remove Person"
                onPress={() => deletePerson(person)}
              />
              <Button 
                title="Edit Person"
                onPress={() => updatePerson(person)}
              />
            </View>

          )}
        />
      </View>


      <Modal animationType="slide" transparent={false} visible={toggleModal}>
        <View>
          <View>
            <Text>Name:</Text>
            <TextInput
              placeholder={editName}
              onChangeText={(text) => handleEditName(text)}
            />
            <TextInput
              placeholder={editAge}
              onChangeText={(text) => handleEditAge(text)}
            />
          </View>
          <TouchableHighlight onPress={closeModal}>
            <Text>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;
