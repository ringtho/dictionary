

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