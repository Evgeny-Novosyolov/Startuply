window.addEventListener('DOMContentLoaded', function () {





  function parallax(event) {
    this.querySelectorAll(".layer").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translate(-${event.clientX*speed/1400}px, -${event.clientY*speed/600}px)`
      layer.style.transformOrigin = "center";
    });
  }

  document.addEventListener("mousemove", parallax);


  const dotsBtn = document.querySelectorAll(".header-wrapper__button .button-wrapper");

  //for (let i = 0; i < dotsBtn.length; i++) {
    //dotsBtn[i].onclick = function () {
    // dotsBtnchild.forEach((item) => item.classList.remove('dots-color'));
    // dotsBtnchild[i].classList.add('dots-color');
    // commentBox.forEach((item) => item.classList.remove('open'));
    // commentBox[i].classList.add('open');

    //};
  //}


  // const arr = {
  //   num1: {
  //     name: "Oleg",
  //     lastname: "Olegov"
  //   },
  //   num2: {
  //     name: "GGGG",
  //     lastname: "QWQQWQ"
  //   },
  // };

  objArray = [{
      foo: 1,
      bar: 2
    },
    {
      foo: 3,
      bar: 4
    },
    {
      foo: 5,
      bar: 6
    }
  ];





  console.log(objArray[0])


  for (var key in objArray[0]) {
    console.log(key)
  }
});