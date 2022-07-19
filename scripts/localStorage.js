

localStorage.setItem('user', 'Tom')
console.log(localStorage.setItem('user', 'Tom'))

// const cat = localStorage.getItem('Tom');

const country = {
    name: 'United States',
    capital: 'United States',
}

const countryJson = `{
    "name": "United States",
    "capital": "United States",
}`


const objectFromJsonString = JSON.parse(countryJson)

objectFromJsonString.push(country)

const jsToJson = JSON.stringify(objectFromJsonString)

console.log(jsToJson)
console.log(objectFromJsonString.name)