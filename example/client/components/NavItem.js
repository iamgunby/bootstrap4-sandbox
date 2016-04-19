import React from 'react'
import classNames from 'classnames'

function NavItem(props) {
  const { children, icon, type } = props

  const iconClassNames = classNames({
    'fa': true,
    [icon]: true,
    'NavItem__icon': true,
  })

  return (
    <a href="#" className={`NavItem NavItem--${type}`}>
      <i className={iconClassNames}></i>
      <span className="NavItem__content">
        {children}
      </span>
    </a>
  )
}

export default NavItem
