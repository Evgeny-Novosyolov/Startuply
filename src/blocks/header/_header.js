window.addEventListener('DOMContentLoaded', function () {


  function parallax(event) {
    this.querySelectorAll(".layer--header").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translate(-${event.clientX*speed/1400}px, -${event.clientY*speed/600}px)`
      layer.style.transformOrigin = "center";
    });
  }

  document.addEventListener("mousemove", parallax);



  const dotsBtn = document.querySelectorAll(".header__button");
  const headerBlock = document.querySelector(".header--center");
  //const headerBlock = document.querySelector(".header-wrapper__text");
  const headerBox = document.querySelector(".header-text__box");
  const BtnChildHeader = document.querySelectorAll(".header__button > *");



  // headerBlock.addEventListener("click", function (event) {
  //   for (let i = 0; i < dotsBtn.length; i++) {
  //     let itemBox = event.target;
  //     if (itemBox == dotsBtn[0] || itemBox == dotsBtn[0].firstChild) {
  //       headerBox.style.marginLeft = "0%";
  //       btnHeaderShow(dotsBtn[0])

  //     } else if (itemBox == dotsBtn[1] || itemBox == dotsBtn[1].firstChild) {
  //       headerBox.style.marginLeft = "-100%";
  //       btnHeaderShow(dotsBtn[1])

  //     } else {
  //       headerBox.style.marginLeft = "-200%";
  //       btnHeaderShow(dotsBtn[2])

  //     }
  //   }
  // })

  function btnHeaderShow(event) {
    BtnChildHeader.forEach((item) => item.classList.remove('dots-color'));
    event.firstChild.classList.add("dots-color")
  }


  dotsBtn.forEach((item) => {
    item.addEventListener('click', function () {
      btnHeaderShow(item);
      console.log(item)



    })
  })
  
});