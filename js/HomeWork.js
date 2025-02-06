// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// function checkAge(age) {
//   age > 18 ? console.log(true) : console.log(false);
// }

// checkAge(15);

// function checkAge(age) {
//   console.log(age === 18 || age > 18);
// }
// checkAge(17);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = function (a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };

// console.log(min(15, 11));

// const min = (a, b) => {
//   if (a < b) {
//     return a;
//   }
//   return b;
// };

// console.log(min(10, 14));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     return yes();
//   }
//   return no();
// };
// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );
