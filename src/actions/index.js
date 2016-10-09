import axios from 'axios';
const API_KEY='fe47c5f96128acfbe28ef2e185079b45';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//this is to keep consistency between the action creators and the reducers switch checks for actions, If I change one then the other should
//have the same value
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
     type: FETCH_WEATHER,
     payload: request
  };
}
