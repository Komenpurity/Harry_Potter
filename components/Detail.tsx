import { detailsProps } from "@/types"

interface detailsCardProps{
  element: detailsProps
}

const Detail = ({element}: detailsCardProps) => {
  const {name,role,house,wand} = element 

  return (
    <div>
      <p>{name} {role} {house} {wand}</p>
    </div>
  )
}

export default Detail