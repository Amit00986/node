// const square = function(x) {
//     return x*x;
// }

// const square = (x) => {
//   return x*x;
// }

// const square = (x) => x * x;

// console.log(square(12));

const event = {
    name: 'Birthday party',
    guestlist:['amit', 'jen', 'ken', 'ten'],
    printGuestList () {
          
        console.log ('Guest list for' + this.name)

        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending '+ this.name)
        })
    }
}

event.printGuestList()