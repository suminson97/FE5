let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "2023.04.12",
};

let newBook = {};
newBook["책이름"] = "JavaScript";
newBook["책가격"] = 10000;
newBook["저자"] = "홍길동";
newBook["출판일"] = "2023.04.12";

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}
let newBook2 = Book("JavaScript", 10000, "홍길동", "2023.04.12"); //undefined왜>? return 값이 없어서
let newBook3 = new Book("JavaScript", 10000, "홍길동", "2023.04.12");

//new키워드를 사용했을때 일어나는일
function Book(책이름, 책가격, 저자, 출판일) {
  //this = {}
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  // return this
}
