/* @jsx createElement*/ //지시자
import { createElement, render } from "./react.js";

function Title() {
  return (
    <div>
      <h1 className="title">hello react title</h1>
      <strong>goooooodd</strong>
    </div>
  );
}
console.log(Title());
render(<Title />, document.querySelector("#root"));
