// Scripting Language
// Loosely Typed Language

// variable = vary + able;

// a container holding information, which could change at a later stage

// var a = 1;
// let a = 1;

// Difference between var & let
// scope
// reinitialization

// {
//   // var a = 1;
//   let a = 1;
// }

// console.log(a);

// var name = "Shipra";

// var name = "Piyush";

// let name = "Shipra";

// let name = "Piyush";

// let a = "Rohit"
// a = "Ramesh";

// const a = "Rohit"
// a = "Ramesh";

// HOISTING: variables declared with var and function definitions are taken to the top of the scope
// var a;
// console.log(a); //undefined
// a = 1;
// console.log(a);

// fun();
// function fun() {
//   console.log("Hello World");
// }

// var a = 1;
// function f1() {
//   var a = 2;
//   console.log(a); //2
// }
// f1();
// console.log(a); //1
// a = 10;
// console.log(a); //10

// var f1; //undefined
// function f1() {
//   console.log("Hello World");
// }
// console.log(f1()); //function
// f1 = 10;
// console.log(f1);

// Data Types:
// let a = 1; //number
// let name = 100; //number
// let name = "100"; //string
// let name = "Rohit"; //string
// let condition = false; //boolean
// let condition = "false"; //string
// let names = [];
// let person = {};
// let x = undefined;
// let y = null;

//Map, Set (MDN)

// Operators

// let a = 1; //assignment
// console.log(a == 1); //true
// console.log(a === 1); //true

// console.log(10 == "10"); //true
// console.log(10 === "10"); //false

// console.log(1 + "1"); //11
// console.log(1 - "1"); //0
// console.log(1 * "10"); //10

// console.log(1 + 2 + "Apples"); //3Apples
// console.log(1 + "Apples" + 2); //1Apples2
// console.log("Apples" + 1 + 2); //Apples12

//INCREMENT, DECREMENT (PREFIX , POSTFIX)

// let a = 1;
// a++;
// console.log(a);//2
// a--;
// console.log(a);//1

// let a = 1;
// a++;
// ++a;
// --a;
// a--;
// console.log(a);

// let x = 0;
// console.log(x++); //0
// console.log(++x); //2
// console.log(--x); //1
// console.log(x++); //1
// console.log(x--); //2

// let a = 1;
// let b = a++ + 1;
// let c = ++a + ++b;
// console.log(c++);
// console.log(a + b + c);

// let a = 2;
// let b = ++a + 1;
// let c = a++ + b++ + 2;
// let d = ++a + ++b + ++c;
// let e = a + b + c + d;
// console.log(++e);

// let p = 10;
// let q = p === 10;
// let r = ++p + ++q + 10;
// let s = p++ + r++ + 10;
// let t = q++ + s++ + 10;
// console.log(t++ - 10);

// let a = 100 > 101;
// let b = a == "0";
// let c = ++a + ++b + a;
// let d = b + ++c + c;
// console.log(++d);

// const numbers = [2, 3, 4, 5, 6, 7];
// let a = numbers.push(8); //7
// let b = numbers.pop(); //8
// let c = numbers.push(b); //7
// let d = numbers.shift(); //2
// let e = numbers.unshift(a, b, c, d); //10
// console.log(d++ + e++);

// let a = numbers.push(8, 9);
// let b = numbers.unshift(10, 11);
// let c = numbers.pop();
// let d = numbers.shift();
// console.log(++a + ++c - b++ + d++);

// const numbers = [12, 21, 34, 6, 5, 3];
// let a = numbers.pop();
// let b = ++a + numbers.unshift(a);
// let c = b++ + numbers.push(b);
// let d = c++ + numbers.shift();
// console.log(a + b + c + d);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// if (true) {
//   var x = 1;
//   let y = 2;
// }
// console.log(y);

// for (var i = 0; i >= 3; i++) {}
// console.log(i);

// for (let i = 100; i >= 1; i--) {
//   if (i <= 30) {
//     return;
//   }
//   console.log(i);
// }

//Omit 799-700 and 399-300

// for (let i = 1000; i > 0; i--) {

//   console.log(i);
// }

// let x = 1;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     x++;
//   }
// }
// console.log(x);

// let x = 1;
// for (let i = 1; i <= 5; i++) {
//   for (let j = i + 1; j <= 5; j++) {
//     x++;
//   }
// }
// console.log(x);

// let x = 1;
// for (let i = 1; i <= 5; i++) {
//   for (let j = i + 1; j <= 5; j++) {
//     x = x + i;
//   }
// }
// console.log(x);

//STRING FUNCTIONS: indexOf, lastIndexOf, replace, replaceAll, slice, substring, toUpperCase, toLowerCase, split

//ARRAY FUNCTIONS: indexOf, lastIndexOf, slice, join, push, pop, shift, unshift, splice

// Objects

// DOM

// Async Programming

//FUNCTIONS: write once, use multiple times...
// functions need to be called(invoked), to be executed

// without parameter
// function sum() {
//   let a = 1;
//   let b = 2;
//   console.log(a + b);
// }
// sum();

//with parameters
// function sum(a, b) {
//   console.log(a + b);
// }

//with default parameter values
// function sum(a = 2, b = 4) {
//   console.log(a + b);
// }

//having return values
// function sum(a = 3, b = 3) {
//   return a + b + 10;
// }

// let a = sum(10, 20);
// let b = sum(5, 5);
// let c = sum(40, 60);
// let d = sum(40);
// let e = sum();

// console.log(a + b + c - d - e);

//STRINGS

//length - counting starts from 1
//index/position - counting starts from 0

// const str = "Javascript is a scripting language";
// console.log(str.length);

// console.log(str.indexOf("S")); //-1
// console.log(str.lastIndexOf("S")); //-1

// console.log(str.indexOf("s", 5));

// console.log(str.includes("z"));

//slice, substring (character at the end position will be omitted)

// let a = str.slice(0, 10);
// console.log(a);

// let x = str.slice(-10, -15);
// console.log(x);

//character at the end position will NOT be omitted, in case of single argument
// console.log(str.slice(10));

// let a = str.slice(10, 15);
// let b = str.substring(10, 15);

// console.log(a == b);

// const str = "Javascript is a scripting language";
// const newStr = str.replace("Javascript", "Python");
// console.log(newStr);
// // str.replace("Javascript", "JS");
// console.log(newStr.length);

//This will only replace the first occurrence
// const newStr = str.replace("a", "A");

// const newStr = str.replace(/a/g, "A");
// console.log(newStr);

// const arr = str.split(" ");
// const arr = str.split("e ");
// console.log(arr);
// console.log(arr.length);

// let str = "JavaScript";
// let output = str.split('').reverse().join('').slice(0, -3).toUpperCase();
// console.log(output); //TPIRSCA

// function foo() {
//   console.log(a);
//   var a = 1;
//   function a() {}
//   console.log(a);
// }
// foo();

//ARRAY FUNCTIONS

// let arr = [1, 2, 3, 4];
// // console.log(arr[0] + arr[3]);
// arr[4] = arr[0]++;
// arr[5] = arr[1]++;
// arr[6] = arr[2]++;
// console.log(arr[arr.length - 1] + arr[arr.length - 2]);

// let names = ["Ram", "Shyam"];
// names.push("Seeta", "Geeta");
// let a = names[0].length + names[names.length - 1].length;
// let b = ++a;
// console.log(++b);

// let a = names.pop(); //Shyam
// names.push(a);
// let b = names.shift();
// names.unshift(b);
// console.log(names[1].length + names[0].length);

// let a = names.push("Seeta", "Geeta"); //4
// let b = names.unshift("Raman", "Chaman"); //6
// let c = names.pop(); //Geeta
// let d = names.pop(); //Seeta
// let e = names.shift(); //Raman
// let f = names.shift(); //Chaman

// console.log(a + b - e.length - f.length); //10-11 = -1

// const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// let a = arr.slice(1, arr.length - 2);
// let b = ++arr[0];
// let c = arr[arr.length - 1]++;
// let d = arr[2]++;
// console.log(b + c + d);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6, 7);
// arr.splice(2, 2, 6, 7);
// arr.splice(0, 3);
// console.log(arr.length);

// let a = arr.splice(3, 1, 10, 11, 12); //[4] [1,2,3,10,11,12,5]
// let b = arr.splice(1, 1, 14); //[2] [1,14,3,10,11,12,5]
// console.log(a[0] + b[0] + arr[arr.length - 1]);

//OBJECTS,
//CALLBACKS
//HOF

// const p = ["Shipra", "Jaipur", 1234567890, 123412341234];

// const person = {
//   name: "Shipra",
//   hometown: "Jaipur",
//   phone: 1234512345,
//   aadhaar: 123412341234,
//   pan: "agh1234r43",
//   isMarried: false,
//   hobbies: ["sleeping", "eating", "singing"],
// };

//DOT NOTATION
// console.log(person.name);

//ARRAY NOTATION
// console.log(person["name"]);

// const x = "name";

// console.log(person[x]);

// console.log(p);
// console.log(person);

// document.writeln(p);
// document.writeln(person);

//ALl pairs from objects can be printed on screen using for..in loop

// for (let i in person) {
//   document.writeln(i + ":" + person[i] + "<br>");
// }

//Object.keys(), Object.values(), Object.entries() //return array

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let entries = Object.entries(person);
// let reversed = entries.reverse();

// console.log(reversed);

// for (let i = 0; i < reversed.length; i++) {
//   document.write(reversed[i][0] + ":" + reversed[i][1] + "<br>");
// }

// const person = {
//   name: "Virat Kohli",
//   country: "England",
// };

// person["profession"] = "Cricketer";
// person["country"] = "India";

// console.log(Object.keys(person).length); //3
// console.log(person["country"].length); //5

// ASSIGNMENT:
// Object.assign, Object.seal, Object.freeze, shallow copy, deep copy

//Spread

// const p1 = ["Ram", "Shyam"];
// const p2 = [...p1];

// const o1 = { name: "Rohit" };
// const o2 = { email: "rohit@fullstacklearning.com", name: "Jatin" };
// const o3 = { ...o1, ...o2 };
// console.log(Object.keys(o3).length);

// const arr1 = [2, 4, 6];
// const arr2 = arr1.splice(1, 2, 7, 8, 10);
// const arr3 = [...arr1, arr2];
// let a = ++arr3[0]; //3
// let b = arr3.shift(); //3
// let c = arr3.pop(); //[4,6]
// let d = arr3.pop(); //10
// console.log(a + b + d);

// console.log(arr3[0] + arr3[1] + arr3[arr3.length - 1] - arr3.length);
