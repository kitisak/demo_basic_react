import axios from 'axios';

const MY_URL = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

function getVodkas() {
  return axios.get(MY_URL).then( response => response.data.drinks );
}

export { getVodkas }
