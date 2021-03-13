import * as types from './weather.actionTypes';

export const fetchWeather = payload => ({
	type: types.FETCH_WEATHER,
	payload,
});

export const selectCity = city => ({
	type: types.SELECT_CITY,
	city,
});
