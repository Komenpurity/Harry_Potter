import { CharacterProps } from "@/types"

interface SearchCard{
    element: CharacterProps
}

const SearchDisplay = ({element}: SearchCard) => {
    const {name,dateOfBirth,id} = element;

  return (
    <div key={id} className="max-w-sm m-3 rounded overflow-hidden shadow-lg"> 
      <div  className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{dateOfBirth}</p>
      </div>
   </div>
  )
}

export default SearchDisplay