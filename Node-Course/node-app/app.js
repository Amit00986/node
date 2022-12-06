// //const fs = require('fs') // it is used to load module in function

// //fs.writeFileSync('notes.txt', 'name is Amit'); // it responsible for writing data into file 
// // const fs = require('fs')
// // fs.appendFileSync('notes.txt','my name is Amit');
 

// // const msg = getNotes()

// // console.log(msg)

// // const  name = 'Amit'
// //const sum = add(4,09); 
// //console.log(sum);

// const chalk = require('chalk')
// const yargs = require('yargs')
// const notes = require('./notes.js')

// //const validator = require('validator')

// // console.log(validator.isEmail('aryan.amit0824@gmail.com')) // validate the email id it's correct or not

// // const greenMsg = chalk.red.bold('Error!') // for customize the color of text according to user

// // console.log(greenMsg)

// // console.log(process.argv[0])

// //const command = process.argv[2]

// //nconsole.log(process.argv)

// // customize yargs version
// yargs.version('1.1.0')

// // create add command
// // add , remove , read, list
// yargs.command ({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demaondOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv) {
//         notes.addNote(argv.title, argv.body)
//     }
// })

// // create remove 
// yargs.command ( {
//     command:'remove',
//     describe:'Remove a command',
//     handler: function(){
//         console.log('Removing a note')
//     }
// })

// // create list
// yargs.command({
//     command:'add list',
//     describe:'add a new list',
//     handler: function(){
//         console.log('Add a new list')
//     }
// })
// // create read
// yargs.command({
//     command : 'add a read',
//     describe: 'add new read file',
//     handler: function(){
//         console.log('Add a new file')
//     }
// })
// // console.log(yargs.argv)
// yargs.parse()

 yargs.command({
    command : 'list',
    describe: 'list your note',
    handler(){
       notes.listNotes();
    }
})


 