import { useDispatch, useSelector } from 'react-redux';

import * as api from './weather.api';
import { getWeatherSelector, getCitySelector } from './weather.selectors';
import { fetchWeather, selectCity } from './weather.actions';

export const useWeather = () => {
	const dispatch = useDispatch();
	const weather = useSelector(getWeatherSelector);
	const city = useSelector(getCitySelector);

	return {
		weather,
		city,
		getWeather: () =>
			api.fetchWeather().then((response) => dispatch(fetchWeather(response))),
		selectCity: (city) => dispatch(selectCity(city)),
	};
};