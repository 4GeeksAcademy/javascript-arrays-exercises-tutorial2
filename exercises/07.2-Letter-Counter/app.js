let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let i = 0; i< par.length; i++) {
    let letter = par[i].toLowerCase();
    if (letter === " ") {
        continue;
    }
    else if (counts[letter] == undefined) {
        counts[letter] = 1
    }
    else (counts[letter] = 1){
        counts[letter] = counts[letter] + 1
    }
}
console.log(counts);

// //se crea el loop para recorrer el array
// for (let i = 0; i < par.length; i++) {
//   //se crea la variable con los caracteres que quiero contar
//    let letra = par[i].toLowerCase();
//   // se crea la condición para que salte los espacios en blanco
//   if (letra == " ") {
//       continue;
//   }
//   // para inicializar el bucle 
//   if (!counts[letra]) {
//     counts[letra] = 1;
//   }
//   // para continuar recorriendo el array
//      counts[letra] = counts[letra] + 1;
//   }
//   // para imprimir en la consola 
//    console.log(counts);
  
  