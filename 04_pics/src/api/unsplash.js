import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9XTmVN1-bT1jAgGBbGV90VVp7R65BQV9IUqXzvNIwso',
  },
});
