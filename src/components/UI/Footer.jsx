import React from 'react'
import footerContact from "../../api/footerApi.json"
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Footer = () => {

  const footerIcon = {
    MdPlace : <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  }

  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {
          footerContact.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div className='footer-contact' key={index}>
                <div className='icon'>{footerIcon[icon]}</div>
                <div className='footer-contact-text'>
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })
        }
      </div>

      <div className='copyright-area'>
        <div className='container'>
          <div className='grid grid-two-cols'>
            <div className='copyright-text'>
              <p>
                Copyright &copy; 2025, All Right Reserved
                {/* <NavLink to="#" target='_blank'>
                  Raj
                </NavLink> */}
              </p>
            </div>

            <div className='footer-menu'>
              <ul>
                <li><NavLink to="/react-country-web"> <IoHome /> </NavLink></li>
                <li><NavLink to="https://github.com/raj-koshta" target='_blank'><FaGithub /></NavLink></li>
                <li><NavLink to="https://www.linkedin.com/in/raj-koshta-808a62246/" target='_blank'> <TbBrandLinkedinFilled /> </NavLink></li>
                <li><NavLink to="/react-country-web/contact"> <MdContactPhone /> </NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer