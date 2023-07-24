/* @jsx createElement*/ //지시자
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hello react title"), createElement("strong", null, "goooooodd"));
}
console.log(Title());
render(createElement(Title, null), document.querySelector("#root"));