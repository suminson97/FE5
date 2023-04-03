// 별표 ****
let x = 5;
let y = 10;

console.log(x > y); //false

// true,false 값은 and,or 연산했을경우 반환값은 true,false
let a = true;
let b = false;

console.log(a && b);

//true,false 가 아닌값을 and,or 연산 했을 경우 단락 회로 편가를 하게 됩니다.
let a2 = "hello";
let b2 = "";

console.log(a2 && b2);

console.log(Boolean("hello")); // t
console.log(Boolean("")); // f
console.log(Boolean([1, 2, 3])); //t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); // t
console.log(Boolean({})); //t
console.log(Boolean(0)); //f
console.log(Boolean(-1)); //t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f

if (undefined) {
  console.log("hello");
}
let aaa;
if (aaa) {
  console.log("hello");
}
//답할수 있어야 견고한 코드를 짤 수 있습니다.
//견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aa;
if (aa > 100) {
  console.log("hello");
}
