import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default (id) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  const restaurantApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`); 
      setResult(response.data);
    } catch (e) {
      setErrorMessage("Something went wrong...");
    }
  }

  useEffect(() => {
    restaurantApi(id);
  }, []);

  return [result, errorMessage];
}