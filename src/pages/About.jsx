import React from 'react'
import countires from "../api/countries.json"

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

            const {id, countryName, capital, population, interestingFact} = country;

            return <div className='card' key={id}>
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
            </div>
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