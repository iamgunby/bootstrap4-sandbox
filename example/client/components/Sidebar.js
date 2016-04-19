import React from 'react'

import NavItem from './NavItem'

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="Sidebar__title"><a href="#">Title</a></div>
      {/*<nav className="Sidebar__navigation">
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
      </nav>*/}
      <NavItem type="sidebar" icon="fa-heart-o">Favorites</NavItem>
      <NavItem type="sidebar" icon="fa-envelope-o">Messages</NavItem>
      <NavItem type="sidebar" icon="fa-bell-o">Notifications</NavItem>
    </div>
  )
}

export default Sidebar
