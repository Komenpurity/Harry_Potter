import { FilterProps } from "@/types";

export async function fetchCharacters() {
    //fetch the data from the api
    const response = await fetch("https://hp-api.onrender.com/api/characters")

    //convert the data from api into json
    const result = await response.json();

    return result;
}

export async function fetchHouses(filters: FilterProps){
    const { house } = filters; 

    //fetch the data from the api
    const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)

    //convert the data from api into json
    const result = await response.json();

    return result;
}