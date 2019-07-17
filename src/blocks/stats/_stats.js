window.addEventListener('DOMContentLoaded', function () {

  const statsItem = document.querySelectorAll(".stats__num");



  window.addEventListener("scroll", function () {
    if (window.scrollY + (screen.availHeight - statsItem.offsetHeight) + 100 < statsItem.offsetTop) return;


    statsItem.forEach((item) => {

      let numMax = +item.dataset.num;
      let numStats = 0;
      const addNum = setInterval(function () {
        if (numMax == numStats) {
          clearInterval(addNum);
        }
        numStats++;
        item.innerHTML = numStats - 1;
      }, 5)
    })

  });

    const btnVideo = document.querySelector('.play-video');
    const btnParent = document.querySelector('.play__wrapper');
    const videoBox = document.querySelector('.video');

    btnVideo.addEventListener('click', function(){
      btnParent.classList.add('btn-closs');
      //videoBox.style.display = "block";
      videoBox.classList.add('video--open');
       
       
      setTimeout(function(){
        btnParent.style.display = "none";
        //videoBox.style.display = "block";
         
      }, 800)

    })
});