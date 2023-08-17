'use client'

import { CharacterProps } from "@/types";
import { useState } from "react";
import Detail from "./Detail";

interface CharacterCardProps {
  char: CharacterProps; 
}

const CharacterCard = ({char}: CharacterCardProps) => {  
  const {name,dateOfBirth,id} = char;
  const [data,setData] = useState([]) 

    async function handleClick(newItem: any){ 

      //calling the url with the id info 
      const response = await fetch(`https://hp-api.onrender.com/api/character/${newItem}`)

        const result = await response.json()  
        setData(result)

    }

    //iterating over the data details from the API when clicked
    {data?.map((element) => {
        return <Detail element={element} />     
    })}

  

  return (
    <div key={id} className="max-w-sm m-3 rounded overflow-hidden shadow-lg" onClick={() => {handleClick(id)}}> 
      <div  className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{dateOfBirth}</p>
      </div>
  </div>
  )
}

export default CharacterCard