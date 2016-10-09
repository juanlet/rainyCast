import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

  switch ( action.type ){
     case FETCH_WEATHER :
       //return state.concat([action.payload.data]); synnonym but I can do it better with ES6 as below
       return [ action.payload.data, ...state ]; // RESULT: [city, city, city] ,  NOT  [ city, [ city, city]]
  }
  return state;
}
