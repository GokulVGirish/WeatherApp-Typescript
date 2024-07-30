import { useState,useEffect,ChangeEvent } from "react"
import { optionType } from "../types"
import axios from "axios"
const BASE_URL = 'http://api.openweathermap.org'
const useForecast=()=>{
     const [term,setTerm]=useState<string>("")
  const [options,setOptions]=useState<any[]>([])
  const [city,setCity]=useState<optionType|null>(null)
  const [foreCast,setForeCast]=useState<null>(null)
  const inputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value.trim()
    setTerm(value)
    if(value==="")return
    getSearchOptions(value)
  }
 
  const getSearchOptions=async(value:string)=>{
    const {data}=await axios.get(`${BASE_URL}/geo/1.0/direct?q=${value}&limit=5&lang=en&appid=f59c84acbd450c1605960368bbb24539`)
   setOptions(data)

  }
  const optionSelect=(option:optionType)=>{
  
    setCity(option)
  }
  const getForecast=async(city:optionType)=>{
      const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=f59c84acbd450c1605960368bbb24539`)
    
    const forecastData={...data.city,list:data.list.slice(0,16)}
    console.log(forecastData)
    setForeCast(forecastData)

  }
  const onSubmit=()=>{
    if(!city)return
    getForecast(city)

  }
  useEffect(()=>{
    if(city){
      setTerm(city.name)
      setOptions([])
    }

  },[city])
  return {
    term,
    options,optionSelect,
    onSubmit,
    foreCast,inputChange,
    setForeCast,setTerm,
    setCity

  }
}
export default useForecast