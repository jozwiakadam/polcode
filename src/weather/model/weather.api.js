import apiService from 'services/apiService';
import endpoints from 'constants/endpoints';

export const fetchWeather = () =>
  apiService.get(endpoints.weather);