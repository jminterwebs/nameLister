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
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [personList, setPersonList] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [personIndex, setPersonIndex] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleAgeChange = (text) => {
    setAge(text);
  };

  const addPerson = () => {
    setPersonList([...personList, {name: name, age: age}]);

    setName('');
    setAge('');
    console.log(name);
  };

  const deletePerson = (person) => {
    const removedList = personList.filter((_, index) => {
      return index !== person.index;
    });

    setPersonList(removedList);
  };

  const updatePerson = (person) => {
    setToggleModal(!toggleModal);
    setEditName(person.item.name);
    setEditAge(person.item.age);
    setPersonIndex(person.index);
  };

  const handleEditName = (text) => {
    setEditName(text);
  };

  const handleEditAge = (text) => {
    setEditAge(text);
  };

  const closeModal = () => {
    setToggleModal(!toggleModal);
  };

  const editPerson = () => {
    personList[personIndex].name = editName;
    personList[personIndex].age = editAge;
    setPersonList(personList);
    closeModal();
  };

  const updateModal = (
    <Modal animationType="slide" transparent={false} visible={toggleModal}>
      <View>
        <View>
          <Text>Name:</Text>
          <TextInput
            placeholder={editName}
            onChangeText={(text) => handleEditName(text)}
            value={editName}
          />
          <TextInput
            placeholder={editAge}
            onChangeText={(text) => handleEditAge(text)}
            value={editAge}
          />
        </View>
        <TouchableHighlight onPress={editPerson}>
          <Text>Update Person</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={closeModal}>
          <Text>Close</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputbox}
            placeholder="Enter Name:"
            onChangeText={(text) => handleNameChange(text)}
            value={name}
          />
          <TextInput
            style={styles.inputbox}
            placeholder="Enter Age"
            onChangeText={(text) => handleAgeChange(text)}
            value={age}
          />
        </View>
        <TouchableHighlight onPress={addPerson}>
          <Text style={styles.submitButtonText}>Submit Name and Age</Text>
        </TouchableHighlight>
      </View>
      <View>
        <FlatList
          style={styles.list}
          data={personList}
          renderItem={(person, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.nameText}>
                <Text>Name: {person.item.name}</Text>
                <Text>Age: {person.item.age}</Text>
              </View>
              <View style={styles.editButtons}>
                <TouchableHighlight onPress={() => deletePerson(person)}>
                  <Text>Remove Person</Text>
                </TouchableHighlight>                    
                <TouchableHighlight onPress={() => updatePerson(person)}>
                  <Text> Edit Person</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        />
      </View>
      {updateModal}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
      
  },
  inputWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250
  },
  inputbox: {
    
    
  },
  submitButtonText: {
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    width: 200
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: 'grey'
  }


})

export default App;
