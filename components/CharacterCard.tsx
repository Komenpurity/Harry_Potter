"use client"

import { CharacterProps } from "@/types";
import { useState } from "react";
import Detail from "./Detail";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CharacterCardProps {
  char: CharacterProps; 
}

const CharacterCard = ({char}: CharacterCardProps) => {  
  const {name,dateOfBirth,id} = char;
  const [data,setData] = useState([]) 

  const { push } = useRouter();

  async function handleClick(newItem: any){ 

    const response = await fetch(`https://hp-api.onrender.com/api/character/${newItem}`)

      const result = await response.json()  
      setData(result)
       
      /* useEffect(() => {
        push('/hello-nextjs');
     }, []); */
  }

  {data?.map((element) => {
      return <Detail element={element} />    
  })}

  return (
    <div className="max-w-sm m-3 rounded overflow-hidden shadow-lg" onClick={() => {handleClick(id)}}> 
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{dateOfBirth}</p>
      </div>
  </div>
  )
}

export default CharacterCard