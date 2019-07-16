window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const dotsBtn = document.querySelectorAll(".comment__button");
  const commentBox = document.querySelectorAll(".comment__box");
  const dotsBtnchild = document.querySelectorAll(".comment__button > *");

  for (let i = 0; i < dotsBtn.length; i++) {

    dotsBtn[i].onclick = function () {
      dotsBtnchild.forEach((item) => item.classList.remove('dots-color'));
      dotsBtnchild[i].classList.add('dots-color');
      commentBox.forEach((item) => item.classList.remove('open'));
      commentBox[i].classList.add('open');

    };
  }


});