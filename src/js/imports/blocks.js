$(document).ready(function () {

  var $boxShowArr = [".features__block", ".history__box", ".services__box--left", ".study-main__box", ".catalog__box", ".pricing-main__block", ".touch__box", ".blog__block"];


  function scroollBox() {
    for (let i = 0; i < $boxShowArr.length; i++) {
      $(window).scroll(function () {
       $boxShowArr.forEach((item) => {
          if ($(item).offset().top <= $(window).scrollTop() + 700) {
            $($(item)).addClass("jackInTheBox");
          }
        });
      });
    }
  }
  scroollBox();

  $(".span-scroll").on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // for (let i = 0; i < arrBoxShow.length; i++) {
  //   divTitle[i].onclick = function () {
  //     divText.forEach((item) => item.classList.remove('device-list__text--open'));
  //     divText[i].classList.add('device-list__text--open');
  //   };
  // }



  // class Rectangle {
  //   constructor(boxChild, boxParent) {
  //     this.boxChild = boxChild;
  //     this.boxParent = boxParent;
  //   }

  //   get showBox() {
  //     return this.scroollBox()
  //   }



  //   scroollBox() {
  //     let boxParent = this.boxChild;
  //     let boxChild = this.boxParent;

  //     $(window).scroll(function () {
  //       if ($(boxParent).offset().top <= $(window).scrollTop() + 300) {
  //         $(boxChild).addClass("fadeInUp");
  //         // return this.scroollBox()
  //       }
  //     })
  //   }

  // }

  // const square = new Rectangle(".blog-container", ".blog__block");
  // square.showBox()



  jQuery(document).ready(function(){
    jQuery('.menu a[href^="#"]').click( function(){
        var scroll_el = jQuery(this).attr('href');
        var destination = jQuery(scroll_el).offset().top;
        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate( { scrollTop: destination }, 1000 );
        }
        return false;
    });
})




});