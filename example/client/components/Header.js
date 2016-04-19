import React from 'react'

import HeaderSearchBar from './HeaderSearchBar'
import NavItem from './NavItem'

function Header(props) {
  const { toggleSidebar } = props

  return (
    <header className="Header">
      <div className="Header__menu-icon" onClick={toggleSidebar}><i></i></div>
      <div className="Header__title">Title</div>
      <div className="Header__spacer" />

      <HeaderSearchBar />

      <NavItem type="header" icon="fa-heart-o">Favorites</NavItem>
      <NavItem type="header" icon="fa-envelope-o">Messages</NavItem>
      <NavItem type="header" icon="fa-bell-o">Notifications</NavItem>

      <a href="#" className="Header__profile-icon">G</a>
    </header>
  )
}

export default Header
