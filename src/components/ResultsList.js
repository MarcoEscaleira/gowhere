import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const renderList = (title, { results, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title} - {results[0].price}</Text>
    <FlatList 
    horizontal
    data={results}
    keyExtractor={result => result.id}
    renderItem={({ item }) => (
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Restaurant", {
            restaurantId: item.id
          });
        }}
      >
        <ResultsDetail result={item} />
      </TouchableOpacity>
    )}
    showsHorizontalScrollIndicator={false}
  />
  </View>
)

const ResultsList = (props) => {
  const { type, results } = props;
  if (!results.length) {
    return null;
  }

  switch (type) {
    case "cheap":
      return renderList("Cost Effective", props);
    case "bitPricier":
      return renderList("Bit Pricier", props);
    case "bigSpender":
      return renderList("Big Spender", props);
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);