import * as types from './weather.actionTypes';

export const initialState = {
  weather: [],
  city: 'Warszawa',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case types.SELECT_CITY:
      return {
        ...state,
        city: action.city,
      };
    default:
      return state;
  }
};