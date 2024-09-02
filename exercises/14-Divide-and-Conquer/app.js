let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(array) {
    let numbersEven = []
    let numbersOdd = []

    for (let i = 0; i < array.length; i++) {
         if ( array[i] % 2 === 0) {
            numbersEven.push(array[i]);
         } else {
            numbersOdd.push(array[i]);
        }
    }
        return numbersOdd.concat(numbersEven);
    } 
    
    




// const mergeTwoList = (array) {
//     let numbersEven = [];
//     let numbersOdd = [];
    
//     numbersEven.forEach((number % 2 !=== 0) => {
//         numbers.push(number)
//     });
//     numbersOdd.forEach((number % 2 !== 0) => {
//         numbers.push(number)
//     });

// };
// console.log(mergeTwoList(numbersEven, numbersOdd));
