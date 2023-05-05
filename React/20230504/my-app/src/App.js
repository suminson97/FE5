import "./App.css";

import Menu from "./components/menu/Menu";
import TripList from "./components/tripList/TripList";
import NewMenu from "./components/newMenu/NewMenu";

function App() {
  const name = "라이캣!";

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <div>
      <div>
        <NewMenu />
        <Menu />
        <h1>안녕 {name}</h1>;<h1>안녕 {name}!</h1>
      </div>
      <div style={{ backgroundColor: "gold", color: "white" }}>
        <h1 style={{ color: "green" }}>년 : {year}</h1>
        <h1>
          월/일 :{month}/{day}
        </h1>
        <h1>
          시간 :{hour}시{minute}분{second}초
        </h1>
      </div>

      <TripList />
    </div>
  );
}

export default App;
