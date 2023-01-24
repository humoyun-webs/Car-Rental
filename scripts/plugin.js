// Selector
const $ = function (item) {
  return document.querySelector(item);
};

// Selector all
const $a = function (item) {
  return document.querySelectorAll(item);
};

// Dynamic element
const createElement = function (tagName, className, content) {
  const newElement = document.createElement(tagName);

  if (className) {
    newElement.setAttribute("class", className);
  }

  if (content) {
    newElement.innerHTML = `${content}`;
  }

  return newElement;
};
