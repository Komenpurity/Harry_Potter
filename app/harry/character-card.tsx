
import Link from 'next/link'
import { CharacterProps } from "@/types";

interface CharacterCardProps {
  char: CharacterProps; 
}

const CharacterCard = ({char}: CharacterCardProps) => {  
  const {name,dateOfBirth,id} = char; 

  return (
    <Link href={`harry/characters/${id}`}>
      <div key={id} className="max-w-sm m-3 rounded overflow-hidden shadow-lg"> 
        <div  className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{dateOfBirth}</p>
        </div>
      </div>
   </Link>
  )
}

export default CharacterCard