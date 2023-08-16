
import { CharacterCard, SearchBar, SearchDisplay } from '@/components'
import { CharacterProps, HomeProps } from '@/types';
import { fetchCharacters, fetchHouses } from '@/utils'

export default async function Home({searchParams}: HomeProps) {  
      const allCharacters = await fetchCharacters() 
  
      const searchHouses = await fetchHouses({
        house: searchParams.house
      })
 // console.log(searchHouses)  

  //check if data is empty,length less than 1,or not an array
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1 || !allCharacters;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 ">
     
     <h1 className='text-3xl font-extrabold'>Harry Potter Characters</h1>
     <SearchBar />

      <div className='grid grid-cols-5 m-2'> 
        {searchHouses?.map((element: CharacterProps) => {
          return <SearchDisplay element={element} />
        })}
      </div>

      {!isDataEmpty ? (
        <div className='grid grid-cols-5 m-2'> 
          
          {allCharacters?.map((char) => {
            //assigning the data to the char 
            return <CharacterCard char={char}/>  
          })}
        </div>
      ) : (
        //when there is an error display this
        <div className='mt-16 flex justify-center items-center flex-col gap-2'> 
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p></p> 
        </div>
      )}
    </main>
  )
}
