window.addEventListener('DOMContentLoaded', function () {
  'use strict';

////////////////////////////////////////////////////////////////////////
  const dotsBtn = document.querySelectorAll(".button--project");
  const projectBox = document.querySelectorAll(".project__box");
  const navMenu = document.querySelector('.project__nav');


  navMenu.addEventListener("click", function (event) {

    let target = event.target;

    if (target.nodeName == "LI") {


      let dataNameBtn = event.target.dataset.name;
      dotsBtn.forEach((item) => item.classList.remove('active'));
      target.classList.add('active');


      projectBox.forEach((item) => item.classList.remove('open'));
      projectBox.forEach((item) => {
        let dataNeme = item.dataset.name
        if (dataNameBtn == dataNeme) {
          item.classList.add('open');

        }
      })


      if (dataNameBtn == "all") {
        projectBox.forEach((item) => item.classList.add('open'));
      }


    }
  });
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////


});