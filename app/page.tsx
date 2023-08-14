import { CharacterCard, SearchBar } from '@/components'
import { fetchCharacters } from '@/utils'

export default async function Home() { 
  const allCharacters = await fetchCharacters() 
  //console.log(allCharacters) 

  //check if data is empty,length less than 1,or not an array
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1 || !allCharacters;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
