// // 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;

// // function logger() {
// //     console.log('My name is Maneesha');
// // }

// // // calling / running / invoking function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     // console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);
// // // console.log(fruitProcessor(5, 0));

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);



// // // Function Declaration
// // function calcAge1(birthYear) {
// //     // const age = 2037 - birthYear;
// //     // return age;
// //     return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1995);
// // console.log(age1);

// // // Function expression
// // const calcAge2 = function (birthYear) {
// //     return 2037 - birthYear;
// // }
// // const age2 = calcAge2(1995);

// // console.log(age1, age2);

// //Function expression 
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// // const yearsUntilRetirement = birthYear => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     return retirement;
// // }

// // console.log(yearsUntilRetirement(1995));

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     // return retirement;
// //     return `${firstName} retires in ${retirement} years`;
// // }

// // console.log(yearsUntilRetirement(1995, 'Maneesha'));
// // console.log(yearsUntilRetirement(1987, 'Rakesh'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {

//     //const age = 2037 - birthYear;
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         // return retirement;
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;

//     } else {
//         // return - 1;
//         // console.log(`${firstName}  has alraedy retired 🎉`);
//         console.log(`${firstName}  has alraedy retired 🎉`);
//         return - 1;
//     }
// }
// console.log(yearsUntilRetirement(1995, 'Maneesha'));
// console.log(yearsUntilRetirement(1987, 'Rakesh'));
// console.log(yearsUntilRetirement(1926, 'Swami'));


// //Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
// //     } else {
// //         console.log('No team wins...');
// //     }
// // }
// // checkWinner(scoreDolphins, scoreKoalas);

// // checkWinner(576, 111);

// //Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// //friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years));
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
