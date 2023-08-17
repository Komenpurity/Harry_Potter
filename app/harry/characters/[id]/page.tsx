'use client'

import { ParamsProps, detailsProps } from "@/types"
import { useEffect,useState } from "react";

interface ParamsDetailsProps{
    params: ParamsProps
  }

const page = ({params}: ParamsDetailsProps) => {
    const {id} = params
    //console.log(params) 
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(<p className='text-center text-3xl font-semibold'>Wait a minute,fetching...</p>)

    async function getData(){ 
      //calling the url with the id info 
      const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
      const result = await response.json() 

      setLoading(<></>)
      //setting the result received from url to be the data in state
      setData(result) 
    }
   // console.log(data) 

    useEffect(() => {
      getData() 
    },[data])

  return (
    <div className="flex justify-center m-6">
      {loading}
     {data?.map((element: detailsProps) => {
        return (
          <div key={element.id} className="max-w-sm m-3 rounded overflow-hidden shadow-lg"> 
            <div  className="px-6 py-4">
            <img src={element.image} className='w-[340px] h-[340px] max-md:w-[80vw] rounded-lg'
          />
            <div className="font-bold text-xl mb-2">Name: <span>{element.name}</span>  </div>
              <p className="text-gray-700 text-base">Actor's Name: <span>{element.actor}</span> </p>
              <p className="text-gray-700 text-base">House: <span>{element.house}</span> </p>
              <p className="text-gray-700 text-base">Wizard: <span>{element.wizard}</span> </p>
              <p className="text-gray-700 text-base">Ancestry: <span>{element.ancestry}</span> </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default page


