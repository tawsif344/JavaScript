const newMap = new Map([
    ['Bannana', 300],
    ['Orange', 465],
    ['Mango', 674]
])

console.log(newMap);

let fruits = new Map();

fruits.set('Jck Frust', 375);
fruits.set('Pain Apple', 246);
fruits.set('Tomato', 925);
fruits.set('Lemon', 347);

fruits.delete('Pain Apple')
fruits.has('Lemon') ///Tru Or Fals///
console.log(fruits);

console.log(fruits.has('Lemon'));


{
    const person = {
        fName: 'Bangladesh',
        lName: 'India'
    }

    console.log(person['fName']);
}
