import React from 'react'
import classNames from 'classnames'
import styles from './Select.module.css'
import PropTypes from 'prop-types'

const Select = ({
  name,
  value,
  setState,
  option,
  data,
  info,
  blurHandler,
  type = 'array',
  tag = 'label',
  valor = 'value',
  size = 'md',
  disabled = false,
}) => {
  const changeHandler = (event) => {
    setState(event.target.value.trim())
  }

  return (
    <select
      id={name}
      value={value}
      onChange={changeHandler}
      className={classNames(styles.select, styles[size], styles[info])}
      onBlur={blurHandler}
      disabled={disabled}
    >
      <option value="" defaultValue="" disabled="disabled">
        {option}
      </option>
      {type === 'array' &&
        data.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      {type === 'object' &&
        data.map((e, i) => (
          <option key={i} value={e[valor]}>
            {e[tag]}
          </option>
        ))}
    </select>
  )
}

export default Select

Select.prototype = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  option: PropTypes.string,
  data: PropTypes.array,
  info: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'normal']),
  blurHandler: PropTypes.func,
  type: PropTypes.oneOf(['array', 'object']),
  label: PropTypes.string,
  valor: PropTypes.string,
}
