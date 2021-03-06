import React, { useEffect } from 'react';

import Selector from 'components/Selector/Selector';
import WeatherWidget from 'weather/components/WeatherWidget/WeatherWidget';

import { useWeather } from 'weather/model/weather.hooks';

import { citiesOptions } from 'constants/cities';

const WeatherPanel = () => {
	const { weather, city, getWeather } = useWeather();

  useEffect(() => {
    getWeather();
  }, [])

  return (
		<>
			<Selector
				options={citiesOptions}
			/>
			<WeatherWidget data={weather} city={city} />
		</>
  );
};

export default WeatherPanel;