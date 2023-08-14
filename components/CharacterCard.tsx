"use client"

import { CharacterProps } from "@/types";
import { useState } from "react"

interface CharacterCardProps {
  char: CharacterProps; 
}

const CharacterCard = ({char}: CharacterCardProps) => {  
  const {name,dateOfBirth,id} = char;


  return (
    <div className="max-w-sm m-3 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{dateOfBirth}</p>
      </div>
  </div>
  )
}

export default CharacterCard