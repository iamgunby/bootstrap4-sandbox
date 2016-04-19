import React from 'react'

function HeaderSearchBar(props) {
  return (
    <form className="HeaderSearchBar" action="#">
      <input className="HeaderSearchBar__input" type="text" />
      <div className="HeaderSearchBar__icon">
        <i className="fa fa-search"></i>
      </div>
    </form>
  )
}

export default HeaderSearchBar
