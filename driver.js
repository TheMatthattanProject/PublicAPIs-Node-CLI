const API_ENDPOINT = `https://api.publicapis.org/entries`

const res = await fetch(`${API_ENDPOINT}`)
const json = await res.json()

console.log(json)