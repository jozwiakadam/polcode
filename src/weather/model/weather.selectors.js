import { createSelector } from 'reselect';

const getWeatherStore = store => store.weather;

export const getWeatherSelector = createSelector(
  getWeatherStore,
  (weather) => weather.weather.data,
);

export const getCitySelector = createSelector(
	getWeatherStore,
	(weather) => weather.city,
);