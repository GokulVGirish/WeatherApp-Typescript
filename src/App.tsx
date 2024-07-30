
import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import ForecastComponent from "./components/ForecastComponent"

const App = ():JSX.Element => {

  const {term,options,optionSelect,onSubmit,foreCast,inputChange,setForeCast,setTerm,setCity}=useForecast()
  const handleBack=()=>{
    setForeCast(null)
    setTerm("")
    setCity(null)

  }
 
   
  return (
    <main className="flex justify-center relative items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
       {
        foreCast&&<button onClick={handleBack} className="p-2 absolute top-2 left-6  text-center font-bold mt-4 bg-white bg-opacity-30 rounded-lg"> <i className="fas fa-arrow-left"></i> Back</button>
       }
     {
      foreCast?(<ForecastComponent data={foreCast}/>):
       (<Search term={term} options={options} inputChange={inputChange} optionSelect={optionSelect} onSubmit={onSubmit} />)
     }
      
    </main>
  )
}

export default App
