'use client'

import { useState } from "react" 
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [character,setCharacter] = useState("") 
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    
    updateSearchParams(character.toLowerCase()); 
  }


  const updateSearchParams = (character: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the character search parameter based on the character value
    if (character) {
      searchParams.set("character", character);
    } else {
      searchParams.delete("character");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="w-full block max-w-xs m-2" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" value={character} onChange={(e) => setCharacter(e.target.value)}  className=" w-full p-3 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Characters" required />
            <button type="submit" className="m-2 text-white absolute  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
           </div>  
    </form>
  )
}

export default SearchBar