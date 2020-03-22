import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          location: "porto",
          limit: 50
        }
      });
      setSearchResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong...");
    }
  }

  useEffect(() => {
    searchApi("restaurants");
  }, []);

  return [searchApi, searchResults, errorMessage];
}