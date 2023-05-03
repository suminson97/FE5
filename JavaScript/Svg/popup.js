const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}
function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  //내가 누르고있는 키정보를 알려줌
  //console.log(e.key);
  ///tab만 눌렀을때 (쉬프트+탭일땐 실행되지않음)
  if (!e.ShiftKey && e.key === "Tab") {
    console.log("tab만 누름");
    e.preventDefault();
    firstEl.focus();
  }
});
firstEl.addEventListener("keydown", function (e) {
  //쉬프트 탭 같이 눌렀을때 실행
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);
