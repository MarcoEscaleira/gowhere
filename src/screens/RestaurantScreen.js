import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import useRestaurant from '../hooks/useRestaurant';

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("restaurantId");
  const [restaurant, errorMessage] = useRestaurant(id);

  if (!restaurant) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    )
  }

  return (
    <>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.price}>{restaurant.price}</Text>
      </View>
      <View style={styles.carroussel}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={photo => photo}
          data={restaurant.photos}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
      </View>
      <Text style={styles.rating}>{restaurant.rating} Stars, {restaurant.review_count} reviews</Text>
      <View style={styles.location}>
          <Text style={styles.address}>{restaurant.location.address1}</Text>
          {restaurant.location.address2 ? <Text style={styles.address}>{restaurant.location.address2}</Text> : null}
          {restaurant.location.address3 ? <Text style={styles.address}>{restaurant.location.address3}</Text> : null}
          <Text style={styles.city}>{restaurant.location.city}</Text>
          <Text style={styles.country}>{restaurant.location.country}</Text>
      </View>
    </>
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center"
  }, 
  title: {
    fontSize: 30,
    fontWeight: "300",
  },
  price: {
    fontSize: 20,
    fontWeight: "700"
  },
  carroussel: {
    paddingRight: 20,
    alignItems: "center"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginLeft: 20
  },
  rating: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center"
  },
  location: {
    flex: 1,
    padding: 8,
    justifyContent: "center"
  },
  address: {
    textAlign: "center",
    fontSize: 15
  },
  city: {
    textAlign: "center",
    fontWeight: "bold"
  },
  country: {
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default RestaurantScreen;