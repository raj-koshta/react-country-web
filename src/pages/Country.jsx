import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/layout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")

  useEffect(()=>{
    try{
      startTransition(async ()=>{
        const res = await getCountryData();
        setCountries(res.data);
      })
    } catch(error){
      console.log(error);
    }
  },[])

  if (isPending) return <Loader />

  // Here is the main logic for search & filter

  const searchCountry = (country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }

    return country;
  }

  const filterRegion = (country)=>{
    if(filter === "all")
      return country

    return country.region.toLowerCase() === filter.toLowerCase();
  }

  const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country))

  return (
    
    <section className='country-section'>

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}
      countries={countries} setCountries={setCountries} />

      <ul className='grid grid-three-cols'>
        {
          filterCountries.map((CurCountry, index)=>{
            return <CountryCard country={CurCountry} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default Country