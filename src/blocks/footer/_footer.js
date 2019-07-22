window.addEventListener('DOMContentLoaded', function () {


  function parallax(event) {
    this.querySelectorAll(".scene--footer-1 .layer--footer").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translate(${event.clientX*speed/1100}px, -${event.clientY*speed/700}px)`
      layer.style.transformOrigin = "center";
    });
  }

  
  function parallax2(event) {
    this.querySelectorAll(".scene--footer-2 .layer--footer").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translate(-${event.clientX*speed/1000}px, -${event.clientY*speed/600}px)`
      layer.style.transformOrigin = "center";
    });
  }

  document.addEventListener("mousemove", parallax);
  document.addEventListener("mousemove", parallax2);


})