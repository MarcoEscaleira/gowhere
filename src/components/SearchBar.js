import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ searchText, onSearchTextChange, onSearchSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather 
        name="search" 
        size={35} 
        color="black" 
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={onSearchTextChange}
        onEndEditing={onSearchSubmit}
        autoCapitalize="none" 
        autoCorrect={false}
      />
      <TouchableOpacity
        onPress={() => {
          onSearchTextChange("")
        }}
        style={styles.clear}
      >
        <MaterialIcons
          name="clear"
          size={20}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 10
  },
  input: {
    flex: 1,
    fontSize: 17
  },
  clear: {
    marginHorizontal: 5,
    height: "100%",
    justifyContent: "center"
  }
});

export default SearchBar;