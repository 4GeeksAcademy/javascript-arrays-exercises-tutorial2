let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let mix2 = [];
for (let i = 0; i < mix.length; i++) {
    let item = mix[i];
    mix2.push(typeof item);   
}
console.log(mix2);
