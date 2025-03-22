import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='Logo'>
            <NavLink to="/react-country-web">
              <h1 className='web-name'>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/react-country-web">
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/about">
                    About
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/country">
                    Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/about">
                    About
                </NavLink>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </header>
  )
}

export default Header