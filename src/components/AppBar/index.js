import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './styles.css'
import logoIc from './logo-ic.png'

function AppBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top')
  })

  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <Link to="/upa" className="navbar-item">
          <img src={logoIc} alt="Logo" />
        </Link>
        <span className={`navbar-burger ${ open ? 'is-active' : '' }`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className={`navbar-menu ${ open ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <NavLink
            to="/upa"
            className="navbar-item"
            activeClassName="is-active"
          >
            UPA
          </NavLink>
          <NavLink
            to="/diversidade"
            className="navbar-item"
            activeClassName="is-active"
          >
            Diversidade
          </NavLink>
          <NavLink
            to="/faq"
            className="navbar-item"
            activeClassName="is-active"
          >
            Perguntas
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
