import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/layout/CountryCard';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

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

  return (
    <section className='country-section'>
      <ul className='grid grid-four-cols'>
        {
          countries.map((CurCountry, index)=>{
            return <CountryCard country={CurCountry} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default Country