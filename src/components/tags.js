import axios from 'axios';
import apiKey from '../config';

// default categories
const defaultCategories = ['travel', 'penguins', 'flowers'];

// initialize default variables
let travel = {}, penguins = {}, flowers = {};

let source = axios.CancelToken.source();

// Run API search for default tags
const search = query => {
   axios.get('https://www.flickr.com/services/rest', {
      params: {
         method: 'flickr.photos.search',
         tags: query,
         api_key: apiKey,
         per_page: 24,
         format: 'json',
         nojsoncallback: 1,
         cancelToken: source.token
      }
   })
   .then(res => {
      const data = res.data.photos.photo;
      query === 'travel' 
         ? travel = data 
         : query === 'penguins' 
         ? penguins = data 
         : flowers = data;
   })
   .catch(err => console.log('There was an error fetching and retrieving data', err));
}

//run the default search for each tag
defaultCategories.forEach( category => search(category));

export { travel, penguins, flowers };
