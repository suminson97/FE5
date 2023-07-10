// 사라
// - 상품 데이터 파일 세팅
const characterList = document.querySelector(".character-list");

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
const characterCollection = (data) => {
  let itemsEl = "";
  data.forEach((v) => {
    itemsEl += `<li>
    <button class="btn-character active" type="button" data-name=${
      v.name
    } data-img=${v.img} data-count=${v.count} data-cost=${v.cost} ${
      !v.count && "disabled"
    }>
      <img class="character-img" src="../img/${v.img}" alt="">
      <span class="character-name">${v.name}</span>
      <strong class="character-price">${v.cost}원</strong>
      ${
        !v.count
          ? `<strong class="soldout">
              <span>품절</span>
            </strong>`
          : ""
      }
    </button>
  </li>
    `;
  });

  characterList.innerHTML = itemsEl;
};

const setup = async () => {
  const data = await getData();
  characterCollection(data);
};

export default setup;
