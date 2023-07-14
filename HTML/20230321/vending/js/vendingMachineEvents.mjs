const cart = document.querySelector(".section1 .shopping-list");
const btnObtain = document.querySelector(".btn-obtain");
const obtainedList = document.querySelector(".obtained-list");
const total = document.querySelector(".total");
const inpDeposit = document.querySelector("#input-money");
const btnDeposit = document.querySelector("#input-money + button");

const balance = document.querySelector(".balance-money");
const myMoney = document.querySelector(".money-in-hand");
let items;

const initializeItems = () => {
  items = document.querySelectorAll(".character-list button");
  console.log(items);
};

const createCartItem = (data) => {
  const li = document.createElement("li");
  li.dataset.name = data.name;
  li.dataset.cost = data.cost; // ex) 1000을 li.dataset.cost에 넣는다
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

  const cartTotal = getCartTotal();
  // const total = cartTotal + data.cost;
  const total = cartTotal + parseInt(e.currentTarget.dataset.cost);
  const balanceVal = parseInt(balance.textContent.replace(/[^0-9]/g, ""));
  // 잔액 부족 예외 처리
  if (total > balanceVal) {
    alert("잔액이 부족합니다.");
    return;
  }

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
    const li = document.createElement("li");
    li.dataset.name = e.currentTarget.dataset.name;
    li.dataset.cost = e.currentTarget.dataset.cost; // ex) 1000을 li.dataset.cost에 넣는다
    li.innerHTML = `
                <img src="./img/${e.currentTarget.dataset.img}" alt="" />
            <span class="obtained-character">${e.currentTarget.dataset.name}</span>
                <strong class="count"
                  >1<span class="a11y-hidden">개</span>
                </strong>
      `;
    cart.appendChild(li);

    // createCartItem(data)
  }

  // 재고 변경
  minusCount(target);

  // 재고 확인 후 품절 표시
  drawSoldOut(target);
};

// 숫자 형식 변경
const formatNum = (num) => {
  return new Intl.NumberFormat().format(num);
};

const getCartTotal = () => {
  const cartItems = cart.children;
  let totalPrice = 0;
  [...cartItems].forEach((item) => {
    const quantity = parseInt(item.querySelector("strong").textContent);
    totalPrice += item.dataset.cost * quantity;
  });
  return totalPrice;
};

const handleBtnObtain = (e) => {
  const cartItems = cart.children;
  const cartTotal = getCartTotal();

  const obtainedItemsName = [...obtainedList.children].map(
    (v) => v.dataset.name
  );
  // 총금액 변경
  const currTotal = parseInt(total.textContent.replace(/[^0-9]/g, ""));
  const totalVal = formatNum(currTotal + cartTotal);
  total.textContent = `총금액: ${totalVal}원`;

  // 잔액 변경
  const currBalanceVal = parseInt(balance.textContent.replace(/[^0-9]/g, ""));
  const balanceVal = formatNum(currBalanceVal - cartTotal);
  balance.textContent = `${balanceVal}원`;

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

const handleBtnDeposit = () => {
  const depositVal = parseInt(inpDeposit.value);
  const reg = new RegExp(/[^0-9]/, "g");
  if (reg.test(depositVal)) {
    alert("숫자만 입력 가능합니다.");
    inpDeposit.value = "";
    return;
  }
  const currMyMoneyVal = parseInt(myMoney.textContent.replace(/[^0-9]/g, ""));
  if (currMyMoneyVal < depositVal) {
    alert("소지금이 부족합니다.");
    return;
  }

  // 잔액 업데이트
  const currBalanceVal = parseInt(balance.textContent.replace(/[^0-9]/g, ""));
  const balanceVal = formatNum(currBalanceVal + depositVal);
  balance.textContent = `${balanceVal}원`;

  // 입금액 reset
  inpDeposit.value = "";

  // 소지금 업데이트
  const myMoneyVal = formatNum(currMyMoneyVal - depositVal);
  myMoney.textContent = `${myMoneyVal}원`;
};

// 이벤트 모으기
const bindEvent = () => {
  initializeItems();
  items.forEach((item) => {
    item.addEventListener("click", handleItem);
  });
  btnObtain.addEventListener("click", handleBtnObtain);
  btnDeposit.addEventListener("click", handleBtnDeposit);
};

export default bindEvent;
