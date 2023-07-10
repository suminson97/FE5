const cart = document.querySelector(".section1 .shopping-list");
const btnObtain = document.querySelector(".btn-obtain");
const obtainedList = document.querySelector(".obtained-list");
let items;

const initializeItems = () => {
  items = document.querySelectorAll(".character-list button");
};

const createCartItem = (data) => {
  const li = document.createElement("li");
  li.dataset.name = data.name;
  // li.dataset.cost = data.cost;
  li.innerHTML = `
              <img src="./img/${data.img}" alt="" />
          <span class="obtained-character">${data.name}</span>
              <strong class="count"
                >1<span class="a11y-hidden">개</span>
              </strong>
    `;
  cart.appendChild(li);
};

const plusQuantity = (target) => {
  const beforeQuantity = target.querySelector("strong").firstChild.textContent;
  const quantity = parseInt(beforeQuantity) + 1;

  target.querySelector("strong").firstChild.textContent = quantity;
};

const minusCount = (target) => {
  target.dataset.count = parseInt(target.dataset.count) - 1;
};

const drawSoldOut = (target) => {
  if (target.dataset.count === "0") {
    target.disabled = true;
    target.innerHTML += `
        <strong class="soldout">
          <span>품절</span>
        </strong>
      `;
  }
};

const handleItem = (e) => {
  const target = e.currentTarget;
  const data = target.dataset;

  const cartItems = cart.children;

  let targetCartEl;
  for (const item of cartItems) {
    if (item.dataset.name === data.name) {
      targetCartEl = item;
      break;
    }
  }

  if (targetCartEl) {
    // 장바구니에 있을 시, 수량 증가
    plusQuantity(targetCartEl);
  } else {
    // 없을 시 요소 생성
    createCartItem(data);
  }

  // 재고 변경
  minusCount(target);

  // 재고 확인 후 품절 표시
  drawSoldOut(target);
};

const handleBtnObtain = (e) => {
  const cartItems = cart.children;
  const obtainedItemsName = [...obtainedList.children].map(
    (v) => v.dataset.name
  );

  [...cartItems].forEach((v) => {
    // 획득한 캐릭터에 있다면 상품 수량 증가
    if (obtainedItemsName.includes(v.dataset.name)) {
      const target = obtainedList.querySelector(`[
        data-name="${v.dataset.name}"] strong`);
      target.textContent =
        parseInt(v.querySelector("strong").textContent) +
        parseInt(target.textContent);
    } else {
      // 획득한 캐릭터에 없다면 상품 요소 생성
      const clone = v.cloneNode(true);
      obtainedList.appendChild(clone);
    }
  });
  cart.innerHTML = "";
};

// 이벤트 모으기
const bindEvent = () => {
  initializeItems();
  items.forEach((item) => {
    item.addEventListener("click", handleItem);
  });
  btnObtain.addEventListener("click", handleBtnObtain);
};

export default bindEvent;
