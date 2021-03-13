import React from 'react';
import PropTypes from 'prop-types';
import cxBinder from 'classnames/bind';

import Icon from 'components/Icon/Icon';

import styles from './WeatherWidget.module.scss';

import { weatherIcons } from 'constants/weatherIcons';

const cx = cxBinder.bind(styles);

const WeatherWidget = ({ data, city }) => (
  <>
    {data.map(item => {
      let weatherComponent = null;
      if (city === item.city) {
        weatherComponent = (
          <div className={cx('weather-widget')} key={item.id}>
            <Icon icon={weatherIcons[item.currently.icon].icon} />
            <div>City: {item.city}</div>
            <div>Temperature: {item.currently.temperature}</div>
            <div>Summary: {item.currently.summary}</div>
          </div>
        );
      };
      return weatherComponent;
    })}
	</>
);

WeatherWidget.propTypes = {
  data: PropTypes.array,
  city: PropTypes.string.isRequired,
};

WeatherWidget.defaultProps = {
  data: [],
};

export default WeatherWidget;