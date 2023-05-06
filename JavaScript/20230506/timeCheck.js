let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

const asyncBlocking = () => {
  return new Promise((resolve) => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
    resolve("blocking finished");
  });
};

result("동기식 코드1");

setTimeout(() => {
  result("setTimeout finished");
}, 0);

// result(asyncBlocking())
result(
  //txt = resolve에 전달된 인자
  asyncBlocking().then((txt) => {
    result(txt);
  })
);
//promise 객체 반환
result("동기식 코드2");
