class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }

  async setup() {
    //로드데이타 기다려야함
    const response = await this.loadData();
    console.log(response);
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (response.ok) {
        //서버의 응답 코드가 200~299일 경우
        return response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
       <button class="btn-cola active" type="button data-item="${el.name}" data-count="${el.count}"  data-price="${el.cost}"  data-img="${el.img}"">
        <img class="cola-img" src="./img/${el.img}" alt="" />
        <span class="cola-name">${el.name}</span>
        <strong class="cola-price">${el.cost}</strong>
      </button>`;

      //포이치문 밖에서 실행하면 li하나에 게속집어넣는꼴
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}
//밖으로 수출
export default ColaGenerator;