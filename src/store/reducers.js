import { combineReducers } from 'redux';

import weather from 'weather/model/weather.store';

export default combineReducers({
  weather,
});