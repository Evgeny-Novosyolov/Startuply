window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const dotsBtn = document.querySelectorAll(".button--project");
  const projectBox = document.querySelectorAll(".project__box");


  // for (let i=0; i<dotsBtn.length; i++){




  //   dotsBtn[i].onclick = function (){
  //     let dataNaneBtn = dotsBtn[i].dataset.name;
  //     if (dotsBtn[i] == dotsBtn[0]) {
  //       dotsBtn.forEach((item) => item.classList.remove('active'));
  //       dotsBtn[0].classList.add('active');
  //       projectBox.forEach((item) => item.classList.remove("open"));
  //       projectBox.forEach((item) => item.classList.add("open"));
  //      console.log(1);
  //     } else {
  //       dotsBtn.forEach((item) => item.classList.remove('active'));
  //       dotsBtn[i].classList.add('active');
  //       console.log(dataNaneBtn)
  //       projectBox.forEach((item) => item.classList.remove("open"))
  //       for (let j=0; j<projectBox.length; j++){
  //         let dataNaneBox = projectBox[i].dataset.name;
  //         if (dataNaneBtn == dataNaneBox ){
  //           projectBox[i].classList.add('open')
  //         }
  //         console.log(dataNaneBox)
  //        }
  //     }

  //   }
  // }




  // for (let i = 0; i < dotsBtn.length; i++) {

  //   dotsBtn[i].onclick = function () {
  //     dotsBtn.forEach((item) => item.classList.remove('active'));
  //     dotsBtn[i].classList.add('active');
  //     let dataNaneBtn = dotsBtn[i].dataset.name;

  //     let dataNaneBox = projectBox[i].dataset.name;

  //     projectBox.forEach((item) => item.classList.remove("open"))
  //     for (let j = 0; j < projectBox.length; j++) {
  //       console.log(projectBox[j])
  //       console.log(dataNaneBtn)
  //       console.log(dataNaneBox)
  //     }
  //   };
  // }




  const navMenu = document.querySelector('.project__nav');
  const projectBlock = document.querySelector('.project__block');

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
          console.log(item);
        }
      })
      if (dataNameBtn == "all") {
        projectBox.forEach((item) => item.classList.add('open'));
      }
      console.log(dataNameBtn);

      
    }
  });


});