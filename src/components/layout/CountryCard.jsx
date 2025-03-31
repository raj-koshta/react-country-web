import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const CountryCard = ({country}) => {

    const {flags, name, population, region, capital} = country;

  return (
    <motion.li 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Fade in when in view
        whileOutOfView={{ opacity: 0 }} // Fade out when out of view
        transition={{ duration: 2 }}
        className='country-card card'>
        <div className='container-card bg-white-box'>
            <img src={flags.svg} alt={flags.alt} />
            <div className='countryInfo'>
                <p className='card-title'>{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</p>
                <p>
                    <span className='card-description'>Population: </span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className='card-description'>Region: </span>
                    {region}
                </p>
                <p>
                    <span className='card-description'>Capital: </span>
                    {capital[0]}
                </p>

                <NavLink to={`/react-country-web/country/${name.common}`}><button>Read More</button></NavLink>
            </div>
        </div>
    </motion.li>
  )
}

export default CountryCard