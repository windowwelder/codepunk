import React from 'react';
import {Link} from "react-router-dom"

export function Header() {
    return (
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink to="/host" className={ ({isActive}) => isActive ? "link-active" : null}>Host</NavLink>
          <NavLink to="/about" className={ ({isActive}) => isActive ? "link-active" : null}>About</NavLink>
          <NavLink to="/vans" className={ ({isActive}) => isActive ? "link-active" : null}>Vans</NavLink>
        </nav>
      </header>
    )
}