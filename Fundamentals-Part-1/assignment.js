//Values and Variables
// let country = 'India';
// let continent = 'Asia';
// let population = 140;
// console.log(country);
// console.log(continent);
// console.log(population);

//Data Types
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//let,const and var
// language = 'Hindi';
// const country = 'India';
// const continent = 'Asia';
// const isIsland = false;
// isIsland = true;

//Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;
// console.log(description1);

//String and Template Literals
// const description = `${country} is in ${continent}, and its
// ${population} million people speak ${language}`;

// if/else Statements
// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${33 - population} million
//     below average`,
//     );
// }

//Type Conversion and Coercion
// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Equality Operators: == vs. ===
// const numNeighbours = prompt(
//     'How many neighbour countries does your country have?',
// );
// LATER : This helps us prevent bugs
// const numNeighbours = Number(
//     prompt('How many neighbour countries does your country have?');
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

//Logic Operators
// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

//The switch Statement
//const language = 'chinese';
//const language = 'mandarin';
//const language = 'spanish';
//const language = 'english';
//const language = 'hindi';
//const language = 'arabic';
// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// // The Conditional(Ternary) Operator
// const country = 'India';
// const population = 130;
// console.log(
//     `${country}'s population is ${population > 33 ? 'above' :
//         'below'} average`,
// );

