import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, searchResults, errorMessage] = useSearch();

  const filterResultsByPrice = (price) => 
    searchResults.filter(result => result.price === price);
  
  return (
    <View style={styles.background}>
      <SearchBar 
        searchText={searchText} 
        onSearchTextChange={setSearchText} 
        onSearchSubmit={() => searchApi(searchText)}
      />
      
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      
      {searchResults.length > 0 ? (
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <ResultsList 
            type="cheap"  
            results={filterResultsByPrice("€")}
          />
          <ResultsList 
            type="bitPricier" 
            results={filterResultsByPrice("€€")}
          />
          <ResultsList 
            type="bigSpender"
            results={filterResultsByPrice("€€€")}
          />
        </ScrollView>
      ) : (
          <Text style={styles.emptyText}>No results found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flex: 1
  },
  errorMessage: {
    fontSize: 18,
    textAlign: "center",
    color: "rgb(130, 0, 0)",
    marginVertical: 10
  },
  emptyText: {
    flex: 1,
    textAlign: "center"
  }
});

export default SearchScreen;