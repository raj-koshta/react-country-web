import React from 'react'
import countires from "../api/countries.json"
import { motion } from 'motion/react'

const About = () => {



  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className='gradient-cards'>

        {
          countires.map((country) => {

            const { id, countryName, capital, population, interestingFact } = country;

            return <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} // Fade in when in view
              whileOutOfView={{ opacity: 0 }} // Fade out when out of view
              transition={{ duration: 2 }}
              className='card' key={id}>
              <div className='container-card bg-blue-box'>
                <p className='card-title'>
                  {countryName}
                </p>
                <p>
                  <span className='card-description'>Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className='card-description'>Population: </span>
                  {population}
                </p>
                <p>
                  <span className='card-description'>Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            </motion.div>
          })
        }

        <div className='card'>
          <div className='container-card bg-blue-box'>
            <p className='card-title'>
              India
            </p>
            <p>
              <span className='card-description'>Capital: </span>
              Delhi
            </p>
            <p>
              <span className='card-description'>Population: </span>
              81651651651
            </p>
            <p>
              <span className='card-description'>Interesting Fact: </span>
              We Love India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About