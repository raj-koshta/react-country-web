import React from "react"
import axios from "axios"

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

// HTTP GET METHOD FOR THE VISUAL COUNTRY NAMES
export const getIndCountryData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}