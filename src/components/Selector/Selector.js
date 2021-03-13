import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
import cxBinder from 'classnames/bind';

import Icon from 'components/Icon/Icon';

import ChevronUp from 'assets/chevron-up.svg';
import ChevronDown from 'assets/chevron-down.svg';

import { useWeather } from 'weather/model/weather.hooks';

import styles from './Selector.module.scss';

const cx = cxBinder.bind(styles);

const Selector = ({
  labelKey,
  options,
}) => {
  const dropdownRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const { selectCity } = useWeather();

  useOnClickOutside(dropdownRef, () => setExpanded(false));

  const selectOption = (option) => {
    setSelected(option);
    selectCity(option[labelKey]);
  };

  return (
    <div
      ref={dropdownRef}
      className={cx('selector')}
      onClick={() => setExpanded(!expanded)}
    >
      <div className={cx('selector-selected')}>{selected && selected[labelKey]}</div>
      <Icon
        icon={expanded ? ChevronUp : ChevronDown}
        className={cx('selector-icon')}
      />
      {expanded && (
        <div className={cx('selector-options')}>
          {options.map((option, id) => (
            <>
              {option !== selected && (
                <div
                  className={cx('selector-option-wrapper')}
                  onClick={() => selectOption(option)}
                >
                  <span
                    className={cx('selector-option')}
                    key={id}
                  >
                    {option[labelKey]}
                  </span>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

Selector.propTypes = {
  labelKey: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

Selector.defaultProps = {
  labelKey: 'label',
  options: [],
};

export default Selector;
