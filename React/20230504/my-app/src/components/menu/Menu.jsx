import "./Menu.css";

function Menu() {
  return (
    //문자열만큼 예외적으로 중괄호 생략
    <ul
      className="newClass"
      style={{ backgroundColor: "black", color: "yellow" }}
    >
      <li>짜장면</li>
      <li>짬뽕</li>
    </ul>
  );
}

export default Menu;
