'use strict';

// セレクトボックスの年月日を自動生成
const selectYear = document.getElementById('formYear');
const selectMonth = document.getElementById('formMonth');
const selectDay = document.getElementById('formDay');

function setYear() {
  let thisYear = (new Date).getFullYear();
  let oldYear = (new Date).getFullYear() - 60;
  for (let i = oldYear; i < thisYear + 1; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectYear.appendChild(option);
  }
}

function setMonth() {
  for (let i = 1; i < 13; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectMonth.appendChild(option);
  }
}

function setDay() {
  for (let i = 1; i < 32; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectDay.appendChild(option);
  }
}

window.onload = function () {
  this.setYear();
  this.setMonth();
  this.setDay();
}


const links = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();

    let href = links[i].getAttribute('href');
    let str = href.replace('#', '');
    let elem = document.getElementById(str);
    const elemY = elem.offsetTop;

    window.scroll({
      top: elemY,
      behavior: 'smooth'
    });
  });
}

const drawerButton = document.getElementById('js-drawer-button');

drawerButton.addEventListener('click', (e) => {
  drawerButton.classList.toggle('active');

  const header = document.getElementById('header');
  const body = document.body;
  const contents = document.getElementById('headerContents');

  if (drawerButton.classList.contains('active')) {
    header.classList.add('js-scroll');
    body.style.overflow = 'hidden';
    fadeIn(contents, 400);
  } else {
    header.classList.remove('js-scroll');
    body.style.overflow = 'auto';
    fadeOut(contents, 400);
  }
});

function fadeIn(node, duration) {

  node.style.opacity = 0;
  node.style.display = 'block';
  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {

    var easing = (timestamp - start) / duration;
    node.style.opacity = Math.min(easing, 1);

    if (easing < 1) {
      requestAnimationFrame(tick);
    }
  });
}

function fadeOut(node, duration) {

  node.style.opacity = 1;
  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {

    var easing = (timestamp - start) / duration;
    node.style.opacity = Math.max(1 - easing, 0);

    if (easing < 1) {
      requestAnimationFrame(tick);
    } else {
      node.style.opacity = 1;
      node.style.display = 'none';
    }
  });
}

// const slideItems = document.getElementById('js-slide-items');
// const count = slideItem.length;
// let currentItem = 1;
// let nextItem = 2;
// const interval = 700;
// const duration = 500;
// let timer;

// const slideItem = slideItems.children('li');
// timer = setInterval(slideTimer, interval);

// function slideTimer() {
//   slideItems.children[current].
// }
// function slideTimer() {
//     $("#fv-movie li:nth-child(" + current + ")").fadeOut(duration);
//     $("#fv-movie li:nth-child(" + next + ")").fadeIn(duration);

//     current = next;
//     next = ++next;

//     if (next > count) {
//         next = 1;
//     }
// }


// タブメニュー
const tabs = document.getElementsByClassName('js-tab');
const contents = document.getElementsByClassName('js-tabContent');
let tabsAry;

tabsAry = Array.prototype.slice.call(tabs);

function tabSwitch() {
  document.getElementsByClassName('js-tab-active')[0].classList.remove('js-tab-active');
  this.classList.add('js-tab-active');
  document.getElementsByClassName('js-content-show')[0].classList.remove('js-content-show');
  const index = tabsAry.indexOf(this);
  document.getElementsByClassName('js-tabContent')[index].classList.add('js-content-show');
}

tabsAry.forEach((tab) => {
  tab.addEventListener('click', (tabSwitch));
});

// tabs.forEach(tab => {

//   tab.addEventListener('click', () => {
//     tab.classList.remove('js-tab-active');
//     this.classList.add('js-tab-avtive');
//   });
// });

// contents.forEach(content => {
//   content.classList.remove('js-content-show');
// });