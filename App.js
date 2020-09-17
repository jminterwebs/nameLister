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
      <View style={styles.modalContainer}>
        <View>
          <View style={styles.inputWrapper}>
            <Text>Name:</Text>
            <TextInput
              placeholder={editName}
              onChangeText={(text) => handleEditName(text)}
              value={editName}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text>Age:</Text>
            <TextInput
              placeholder={editAge}
              onChangeText={(text) => handleEditAge(text)}
              value={editAge}
            />
          </View>
        </View>
        <TouchableHighlight
          style={(styles.listButton, styles.updateButton)}
          onPress={editPerson}>
          <Text style={styles.updateText}>Update Person</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={closeModal}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Name:"
            onChangeText={(text) => handleNameChange(text)}
            value={name}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Age"
            onChangeText={(text) => handleAgeChange(text)}
            value={age}
          />
        </View>
        <TouchableHighlight onPress={addPerson}>
          <Text style={styles.submitButtonText}>Submit Name and Age</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.list}>
        <FlatList
          data={personList}
          renderItem={(person, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.nameText}>
                <Text style={styles.listText}>Name: {person.item.name}</Text>
                <Text style={styles.listText}>Age: {person.item.age}</Text>
              </View>
              <View style={styles.editButtons}>
                <TouchableHighlight
                  style={(styles.listButton, styles.deleteButton)}
                  onPress={() => deletePerson(person)}>
                  <Text style={styles.deleteText}>Remove Person</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={(styles.listButton, styles.updateButton)}
                  onPress={() => updatePerson(person)}>
                  <Text style={styles.updateText}>Edit Person</Text>
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
    width: 250,
  },
  inputBox: {
    fontSize: 15,
    color: 'black',
  },
  submitButtonText: {
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    width: 200,
  },
  list: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300,
    marginTop: 5,
    marginBottom: 5,
  },
  listText: {
    fontSize: 15,
    paddingVertical: 5,
  },
  listButton: {
    paddingVertical: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 15,
  },
  updateText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: 'orange',
    padding: 5,
    textAlign: 'center',
  },
  modalContainer: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 5,
  },
});
export default App;
