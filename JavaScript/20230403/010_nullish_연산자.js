//스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신문법을 구식브라우저에서도 사용할수 있도록 해주는 것)이 필요합니다.
//https://ko.javascript.info/nullish-coalescing-operator
let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName ?? "익명사용자");

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c);

//단락회로평가와 nullish연산자의 차이점
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // null이아니기 때문에 0

let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

let height3 = "";
console.log(height3 || "hello");
console.log(height3 ?? "world");
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
