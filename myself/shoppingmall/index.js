'use strict';

const itemBox = document.querySelector('.item-box');
const btns = document.querySelector('.menu-box');

let items;

// fetch API로 바꿔보기..?
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
(function () {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == xhr.DONE && xhr.status == 200) {
      items = JSON.parse(xhr.responseText).items; // json to object
      items.forEach((item) => createItemHTML(item));
    }
  };

  // false는 코드가 비동기적으로 처리되지 않게 해주는 옵션 -> 비동기 좀 공부하자..
  xhr.open('GET', 'items.json', false);
  xhr.send();
})();

btns.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') return false;
  let type = e.target.dataset.type;

  itemBox.innerHTML = ''; // 기존 목록을 지우고 추가!
  items.forEach((item) => {
    if (item.type === type || item.color === type) {
      createItemHTML(item);
    }
  });
});

// html 생성
function createItemHTML(item) {
  let html = `
    <div class="item">
        <img src="${item.url}" class="icon" />
        <span class="item-text">${item.gender} ${item.size} ${item.price}</span>
    </div>`;
  itemBox.innerHTML += html;
}
