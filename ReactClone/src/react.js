function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag(null, props, ...children);
  }
  return { tag, props, children };
}
function renderDom(vDom) {
  if (typeof vDom === "string") {
    return document.createTextNode(vDom);
  }
  const el = document.createElement(vDom.tag);
  // =createElement("div")

  vDom.children
    .map((element) => {
      return renderDom(element);
    })
    .forEach((realEl) => {
      el.append(realEl);
    });

  return el;
}
function render(element, container) {
  //가상돔이라 바로 append 불가
  container.append(renderDom(element));
}
export { createElement, render };
