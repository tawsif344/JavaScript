const fruits = new Map([
    ['Mango ', 357],
    [' Banana ', 514],
    [' Orange ', 2478],
    [' Jack Fruits ']
]);

let text = '';

for(const x of fruits.entries()){
    text += x;
    console.log(x); ///x Pacche///
}

console.log(text);