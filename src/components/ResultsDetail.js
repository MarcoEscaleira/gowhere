import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {result.image_url ? <Image source={{ uri: result.image_url }} style={styles.image} /> : null}
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stars, {result.review_count} reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  },
  rating: {
    fontSize: 12,
    fontWeight: "300"
  }
});

export default ResultsDetail;