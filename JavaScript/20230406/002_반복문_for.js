const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`;

text += "<section><h2>" + cars[0] + "</h2></section>";
text += "<section><h2>" + cars[1] + "</h2></section>";
text += "<section><h2>" + cars[2] + "</h2></section>";
text += "<section><h2>" + cars[3] + "</h2></section>";
text += "<section><h2>" + cars[4] + "</h2></section>";

console.log(text);
// document.body.innerHTML = text
// document.write(text)

const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = "";
for (i = 0; i < cars2.length; i++) {
  text2 += "<section><h2>" + cars2[i] + "</h2></section>";
}
text2;

for (let i = 0; i < 10; i++) {
  //++i와 차이없습니다
  console.log(i);
}
console.log(i); //i는 반복문이 끝난 다음 호출할수 없습니다.

for (let i = 0; i < 10; i += 2) {
  //2씩 증감
  console.log(i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
console.log(i); //i는 반복문이 끝난 다음 호출할수 없습니다.

for (i = 0; i < 10; i += 2) {
  //let 을 생략하면안됩니다. i가 전역으로 생선됩니다.
  console.log(i);
}
console.log(i);

for (;;) {
  //무한반복코드입니다(실행하지 마세요) 의도한 무한 반복은 매우 위험합니다. 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 갑니다.
  //1.반복의 시간을 가능하면 정해주세요.
  //2.탈출 조건을 명확히 해주세요.
  console.log(i);
}

for (let i = 0; i < 10; ) {
  console.log("실행하지 마세요.");
  i += 1;
}

for (let i = 0; ; ) {
  console.log("실행하지 마세요.");
  i += 1;
  if (i >= 10) {
    break;
  }
}

for (;;) {
  //무한반복입니다.
  let i = 0;
  console.log("실행하지 마세요.");
  i += 1;
  if (i >= 10) {
    break;
  }
}

let i = 0;
for (;;) {
  console.log("실행하지 마세요.");
  i += 1;
  if (i >= 10) {
    break;
  }
}
