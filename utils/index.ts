export async function fetchCharacters() {
    //fetch the data from the api
    const response = await fetch('https://hp-api.onrender.com/api/characters')

    //convert the data from api into json
    const result = await response.json();

    return result;
}