let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(name){
    
    let newArray = people.filter((person) => person != name)
    return newArray;
}


// function deletePerson(name) {
//      let people2 = people.filter((person) => person != name)
//      return people2;
    
    // let people2 = people.filter( function(deletePerson) {
    //     if (people = 'daniella') {
    //         return people2;
    //     }
    //     else if (people = "juan") {
    //         return people2;
    //     }
    //     else (people = "emilio") {
    //         return people2;
    //     }
    // })
//};

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

