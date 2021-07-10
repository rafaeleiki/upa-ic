import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import logoIc from './logo-ic.png'

function AppBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top')
  })

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logoIc} alt="Logo" />
          </a>
          {open ? (
            <span className="navbar-burger" onClick={setOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          ) : null}
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item" activeClassName="is-active">UPA</NavLink>
            <NavLink to="/faq" className="navbar-item" activeClassName="is-active">Perguntas</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
