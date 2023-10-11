// Write your solution here!
const cats = ("Milo", "Otis", "Garfield");

// push() adds item to the end of an array
function destructivelyAppendCat (name){
cats.push('Ralph');
}

cats.length = 0;
cats.push ('Milo','Otis', 'Garfield');

// unshift() adds one or more elements to the beginning of an array and returns the new length of the array
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
cats.length= 0;
cats.push ('Milo','Otis', 'Garfield');

// pop() removes last element from the array and returns new value 
function destructivelyRemoveLastCat(){
cats.pop();
}
cats.length = 0;
cats.push ('Milo','Otis', 'Garfield');

// shift() removes the element at the 0 index and shifts the value of the consecutive index down,it then returns the removed value
function destructivelyRemoveFirstCat(){
cats.shift()
}

function appendCat(name){
    let copyOfCat = [...cats, "Broom"];
    return copyOfCat

}
function prependCat(){
    let prependCat= ['Arnold', ...cats];
    return prependCat
}

function removeLastCat(){
    let removeLastCat = cats.slice(0,2);
    return removeLastCat
}
function removeFirstCat(){
    let removeFirstCat =cats.slice(1);
    return removeFirstCat
}