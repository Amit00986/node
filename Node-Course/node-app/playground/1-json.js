const fs = require('fs')
// const book = {
//     title:'amlouyt',
//     author: 'rasyn'
// }
 
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffers = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffers.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "kantar"
user.age = 78

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)