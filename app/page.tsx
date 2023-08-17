import { CharacterProps, HomeProps } from '@/types';
import { fetchCharacters, fetchHouses } from '@/utils'
import Link from 'next/link'
import { CharacterCard, SearchBar, SearchDisplay } from './harry';

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
     
     <h1 className='text-3xl font-extrabold'>Harry <Link href="/details">Potter</Link> Characters</h1>
     <SearchBar />

          <div className='grid grid-cols-5 m-2'> 
            {searchHouses?.map((element: CharacterProps) => {
              //iterating over the search results from the API
              return <SearchDisplay element={element} />
            })}
          </div>

      {!isDataEmpty ? (
        <div>
          <h1 className='text-1xl font-bold text-center'>Harry Potter Details</h1>
          <div className='grid grid-cols-5 m-2'>   
            {allCharacters?.map((char) => {
              //assigning the data to the char 
              return <CharacterCard char={char}/>  
            })}
          </div>
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
