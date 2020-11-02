import axios from 'axios';

const KEY = 'AIzaSyD1WX5uccqlF935Ta9-ahRkIY8K4W26S74';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: '5',
    key: KEY,
  },
});
