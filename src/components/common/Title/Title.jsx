import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'
import { options } from './constants'
import classNames from 'classnames'

export const Title = ({
  children,
  theme = 'light',
  color = 'base',
  size = 'md',
  weight = 'bold',
  isCentered,
  isInline,
  style,
}) => {
  return (
    <h2
      className={classNames(
        styles.title,
        styles[size],
        styles[weight],
        {
          [styles.theme]: theme === 'dark',
          [styles[color]]: theme === 'light',
        },
        {
          [styles.isCentered]: isCentered,
          [styles.isInline]: isInline,
        },
        style
      )}
    >
      {children}
    </h2>
  )
}

export default Title

Title.propTypes = {
  children: PropTypes.node,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}
