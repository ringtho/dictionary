

export default async function getWord(searchWord){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    if(!res.ok){
        const errorMessage = {
        title: "No Definitions Found",
        message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
        resolution : "You can try the search again at later time or head to the web instead.",
        status: res.status
        }
        throw errorMessage
    }
    const data = await res.json()
    return data  
}


export async function getRandomWord(){
    const API_KEY = `orzwp4uht56ctsjt7y28njq528njqjb5z0dlat7abt0v2lek8`
    const url = `http://api.wordnik.com/v4/words.json/randomWord?api_key=${API_KEY}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    return data
}