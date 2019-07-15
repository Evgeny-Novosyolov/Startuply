$(document).ready(function () {

  $(".header-next").on("click", function () {
    
    $(this).fadeOut("fast")
    $(".header__button").fadeOut("fast")
    $(".header__text--hidden, .header-close").fadeIn("slow")

  });

  $(".header-close").on("click", function () {
    
    $(this).fadeOut("fast")
    $(".header__button").fadeIn("slow")
    $(".header__text--hidden").fadeOut("fast")
    $(".header-next").fadeIn("fast")

  });
});