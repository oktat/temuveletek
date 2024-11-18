
/* 
Legnagyobb közös osztó
bevitel: 48, 18; kimenet: 6
bevitel: 54, 24; kimenet: 6
bevitel: 101, 10; kimenet: 1
*/
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

/*
Palidrom egy szó?
bevitel: "kodok"; kimenet: true
bevitel: "alma"; kimenet: false
bevitel: "má"; kimenet: false
bevitel: "a"; kimenet: true
bevitel: "radar"; kimenet: true

*/
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

/*
Fibonacci számok

Az első két szám 0 és 1. A következők az előző kettő összege

bevitel: 10; kimenet: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
bevitel: 20; kimenet: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
Két tömb összehasonlítása
bevitel: [1, 2, 3], [1, 2, 3]; kimenet: true
bevitel: [1, 2, 3], [1, 2]; kimenet: false
bevitel: [1, 2, 3, 4], [1, 2, 3]; kimenet: false
*/
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index]);
}