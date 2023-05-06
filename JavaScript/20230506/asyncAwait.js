// async function message() {
//   let hello = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("world");
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }// message();

//promise문법시

// function message() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   }).then((result) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + " worsld");
//       }, 100);
//     }).then((message) => {
//       console.log(message);
//     });
//   });
// }
// message();

// console.log("i am sync!!");

// function message() {
//   //인스턴스를 사용하지않고 바로 실행하는 메소드(스테틱 메소드)
//   Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("world");
//       }, 100);
//     }),
//   ]).then(([hello, world]) => {
//     console.log(`${hello} ${world}`);
//   });
// }

// async function message() {
//   const [hello, world] = await Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("world");
//       }, 100);
//     }),
//   ]);

//   console.log(`${hello} ${world}`);
// }

// message();
