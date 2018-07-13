//////////////////////
// GLOBAL VARIABLES //
//////////////////////
function rand() {
    let radom = Math.random();
    let random15 = radom * 21;
    let randominteger = Math.floor(random15);
    console.log(randominteger);

}
rand();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
function randomletter() {
    let index = Math.floor(alphabet.length * Math.random());
    let god = alphabet[index];
    console.log(god)
    
}
randomletter();


const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

function randomfoods(){
    let integer = Math.floor(foods.length * Math.random());
    let food = foods[integer];
    console.log(food);
}
randomfoods();


const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
function randomstudents(){
    let integer = Math.floor(students.length * Math.random());
    let student = students[integer];
    console.log(student);
}
randomstudents();
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////