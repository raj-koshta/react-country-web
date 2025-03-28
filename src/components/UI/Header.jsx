import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [show, setShow] = useState()

  const handleButtonToggle = ()=>{
    return setShow(!show);
  }

  return (
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='Logo'>
            <NavLink to="/react-country-web">
              <h1 className='web-name'>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/react-country-web" onClick={handleButtonToggle}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/about" onClick={handleButtonToggle}>
                    About
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/country" onClick={handleButtonToggle}>
                    Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/react-country-web/contact" onClick={handleButtonToggle}>
                    Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='ham-menu'>
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header