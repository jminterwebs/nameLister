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
      <View>
        <TextInput
          placeholder="Enter Name:"
          onChangeText={(text) => handleNameChange(text)}
          value={name}
        />
        <TextInput
          placeholder="Enter Age"
          onChangeText={(text) => handleAgeChange(text)}
          value={age}
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
      {updateModal}
    </SafeAreaView>
  );
};

export default App;
