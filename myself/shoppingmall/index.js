// strict mode => js의 비정상적인 문법을 엄격하게 잡아줌
'use strict';

let itemBox = document.querySelector('.item-box');
let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성

xhr.onreadystatechange = function () {
  if (xhr.readyState == xhr.DONE && xhr.status == 200) {
    let items = JSON.parse(xhr.responseText).items; // json to object
    createItems(items);
  }
};
xhr.open('GET', 'items.json', true);
xhr.send();

function createItems(items) {
  items.forEach((item) => {
    createItemHTML(item);
  });
}

// html 생성
function createItemHTML(item) {
  let html = `
    <div class="item">
        <img src="${item.url}" class="icon" />
        <span class="item-text">${item.gender} ${item.size} ${item.price}</span>
    </div>`;
  itemBox.innerHTML += html;
}
