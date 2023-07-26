// 사라
// - 상품 데이터 파일 세팅
const colaList = document.querySelector(".cola-list");

// 데이터 불러오기
const getData = async () => {
  try {
    const response = await fetch("../items.json");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

// 상품 요소 생성

const colaFactory = (data) => {
  let allItemEl = "";

  data.forEach((v) => {
    allItemEl += `<li>
      <button class="btn-cola" type="button" ${
        !v.count && "disabled"
      } data-name="${v.name}" data-img="${v.img}" data-cost="${
      v.cost
    }" data-count="${v.count}">
        <img class="cola-img" src="./img/${v.img}" alt="">
        <span class="cola-name">${v.name}</span>
        <strong class="cola-price">${v.cost}원</strong>
        ${
          !v.count
            ? `<strong class="soldout">
                <span>품절</span>
              </strong>`
            : ""
        }
      </button>
    </li>`;
  });

  colaList.innerHTML = allItemEl;
};

const setup = async () => {
  const data = await getData();
  colaFactory(data);
};

export default setup;
