const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your Notes....'
}
const addNote =  (title, body) => {
    const notes = loadNotes() 
    const duplicateNotes = notes.filter((note) => note.tile === title) // array of duplicate store
    const duplicateNote = notes.find((note) => note.title === title) // find first duplicate  element

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes) 

        console.log(chalk.green.inverse('New note added! '))
  }
  else {
    console.log(chalk.red.inverse('Note title taken!'))
  }

}
const listNotes = () => {
    const notes = loadNotes(); 

    console.log(chalk.inverse('your notes'))

    notes.forEach((notes) => {
        console.log(note.title)
        
    });

}
 
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {

    }
  
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    listNotes: listNotes
}