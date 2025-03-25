import React from 'react'

const CountryCard = ({country}) => {
  return (
    <li>
        {country.name.common}
    </li>
  )
}

export default CountryCard