import { detailsProps } from "@/types"

interface detailsCardProps{
  element: detailsProps
}

const Detail = ({element}: detailsCardProps) => {
  const {name,role,house,wand,id} = element 

  return (

    <div key={id} className="max-w-sm m-3 rounded overflow-hidden shadow-lg"> 
      <div  className="px-6 py-4">
      <div className="font-bold text-xl mb-2"> {name} </div>
        <p className="text-gray-700 text-base"> {role} </p>
        <p className="text-gray-700 text-base"> {house} </p>
        <p className="text-gray-700 text-base"> {wand} </p> 
      </div>
    </div>
  )
}

export default Detail