import { ChangeEvent } from "react"
import { optionType } from "../types"
type props={
    term:string,
    options:any[],
    inputChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    optionSelect:(option:optionType)=>void,
    onSubmit:()=>void

}
const Search = ({term,options,onSubmit,inputChange,optionSelect}:props):JSX.Element => {
  
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-lg text-zinc-700">
        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        <p className="text-sm mt-2">Enter below a place you want to know the Weather of</p>
        <div className="flex relative items-center justify-center mt-10 md:mt-4">
          <input type="text" value={term} onChange={inputChange} className="px-2 py-1 rounded-l-md border-2 border-white"/>
        <ul className="absolute top-9 lg:left-5 md:left-20 sm:left-56 bg-white rounded-b-md rounded-t-md w-[200px]">
            {
            options.map((option:optionType,index)=>{
              return (
                <li key={option.name+"-"+index}><button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={()=>optionSelect(option)} >{option.name}</button></li>
              )
            })
          }
        </ul>
        <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 px-2 py-1 hover:text-zinc-500 cursor-pointer" onClick={onSubmit}> Search</button>
        </div>
      </section>
    </main>
  )
}
export default Search