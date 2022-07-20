import React from 'react'
import PropTypes from 'prop-types'
import styles from './IconLabel.module.css'
import classNames from 'classnames'

export const IconLabel = ({
  label,
  handleClick,
  children,
  iconType = 'normal',
  theme = 'light',
}) => {
  return (
    <div className={classNames(styles.iconLabel)}>
      <span className={classNames(styles.label, styles[theme])}>{label}</span>
      <i
        className={classNames(styles.icon, [styles[`${iconType}-${theme}`]])}
        onClick={handleClick}
      >
        {children}
      </i>
    </div>
  )
}

IconLabel.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  iconType: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'normal']),
}

export default IconLabel
