const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 !== 0;
});

//모음제거
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

//reduce
const arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => a + c, 0); //초깃값 0 쓰기

//min,max도있는데sum이없다?

//includes
const arr4 = ["hello", "world", "hojun"];
arr4.includes("world"); //t
arr4.includes("sumin"); // f
arr4.includes("jun"); // f

//join
const arr5 = ["hello", "world", "hojun"];
arr5.join("!");

const arr6 = ["010", "4618", "4516"];
arr6.join("-");

const arr7 = [010, 4618, 4516];
arr7.join("-"); //안됩니다.

//0b100// b는 바이너리의 약자입니다.
//0o100 // o는 옥타의 첫글자입니다.
//0x100 // x는 헥사를 표현합니다.
