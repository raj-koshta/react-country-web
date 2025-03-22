import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import img from "/images/world.png"

const Home = () => {

  return (
    <main className='hero-section main'>
      <div className='container grid grid-two-cols'>
        <div className='hero-content'>
          <h1 className='heading-xl'>
            Explore the World, One Country at a time.
          </h1>
          <p className='paragraph'>
            Discover the history, calture, and beauty of every nation. 
            Sort, search, and filter through countries to find the details you.
          </p>
          <button className='btn btn-darken btn-inline bg-white-box'>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className='hero-image'>
          <img src={img} 
            className='banner-image'
            alt='World Beauty' />
        </div>
      </div>
    </main>
  )
}

export default Home