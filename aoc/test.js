

const fs = require('node:fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    const regex = /\d+/g;
    let multiply = []
    if (err) {
        console.error(err);
        return;
    }
    const handlesingle = array => {
        if (array <= 10) multiply.push(array[0] + array[0])
        else multiply.push(array[0].split('')[0] + array[0].split('')[array[0].split('').length - 1])
    }

    const handleMultiple = array => {

        if (array.length < 3) {
            let arraylength1 = array[0].length;
            let arraylength2 = array[1].length;
            if (arraylength1 > 1 && arraylength2 > 1) multiply.push(array[0].split('')[0] + array[1].split('')[array[1].length - 1])
            if (arraylength1 > 1 && arraylength2 < 2) multiply.push(array[0].split('')[0] + array[1].split('')[array[1].length - 1])
            if (arraylength1 > 2 && arraylength2 < 2) multiply.push(array[0].split('')[0] + array[1].split('')[array[1].length - 1])
            if (arraylength1 < 2 && arraylength2 < 2) multiply.push(array[0].split('')[0] + array[1].split('')[array[1].length - 1])
        }
        else {
            let last = array[array.length - 1].split('')
            multiply.push(array[0].split('')[0] + last[last.length - 1])
        }
    }


    data.split('\n').forEach(arr => {

        let matches = arr.match(regex);
        matches.length < 2 ? handlesingle(matches) : handleMultiple(matches) //multiply.push(a + a) handlesingle(matches)
    })

    let convertedAndcalculated = multiply.reduce((a, c) => +a + +c, 0);
    console.log("end", convertedAndcalculated)

});


//

// const handleMultiple = array => {
//     if (array.length < 3) multiply.push(array[0] + array[1])
//     else multiply.push(array[0] + array.slice(-1))
// }

// const regex = /\d+/g;
// let multiply = []
// a.forEach(arr => {

//     let matches = arr.match(regex);
//     // console.log(matches, "dd");
//     matches.length < 2 ? handlesingle(matches) : handleMultiple(matches) //multiply.push(a + a)
// })

// let convertedAndcalculated = multiply.reduce((a, c) => +a + +c, 0);


// console.log(convertedAndcalculated)
// var
// var matches = b.match(regex);
// console.log(1 + 2 + 3 + 8 + 1 + 2 + 3 + 4 + 5 + 7)
// let test2 = matches.reduce((a, c) => +a + c, 0);
// console.log(test2);