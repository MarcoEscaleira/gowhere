import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer xztNER2uG4jLxv1IWHiYj2bAwNvpmJkLK0uEFkDr-KX0yVOIcdS6Z1MwZ3L-Au6bB5HR-sSDuwlJr7iOr7P-8GtRAyCrax3-F9R0iQkcWjguSOYVxuMshtBFwyFwXnYx`
  }
});