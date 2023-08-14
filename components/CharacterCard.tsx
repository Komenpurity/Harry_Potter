"use client"

import { CharacterProps } from "@/types";
import { useState } from "react"

interface CharacterCardProps {
  char: CharacterProps; 
}

const CharacterCard = ({char}: CharacterCardProps) => {  
  const {name,dateOfBirth,id} = char;


  return (
    <div key={id}> 
      <p>{name}  {dateOfBirth}</p> 
    </div>
  )
}

export default CharacterCard