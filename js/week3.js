//object, method
console.log(`hello`);

//variablre
/*var jkrngjfdgdajg;jfdagjofidajgiofdag
kldrng;klrd;lgn;DOMStringList;odjg */

const number = 10;
//number = 10;

//const

console.log(number);

//primitive data types, string, number, boolean, null, underfined

//const firstName = "joe";
//const lastName = "smith";
//const age = 20;
//const marrage = true;

//console.log(`my name is ${firstName} ${lastName}, I'm ${age} years old.`);
//console.log(firstName.toUpperCase());
// fristname, lastname, age, gender, address: unit, street, sub, city, state, postcode,
const person = {
    firstName: "Joeeee",
    lastName: "smith",
    age: 20,
    marrage: true,
    habbies: ["movie", "singing", "sport" ],
    address: {
        unit: 6,
        street: "selborne",
    }
};

console.log(person.firstName);
console.log(person.habbies[0]);
console.log(person.firstName.length);

//if
let score = 40;
if (score === 100 ) {
    console.log("pass!");
} else  if (score >75 && score<95){
    console.log("see you next year!");
}else  if (score >50 && score<74){
    console.log("see you next year!");
}else {
    console.log("hmmmmaaaaa");
}

