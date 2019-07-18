window.addEventListener('DOMContentLoaded', function () {
 
  const eye =  document.querySelectorAll('.fa-eye');

  
   eye.forEach((item) => {
     item.addEventListener("click", function(){
       alert("Попадание");
     })
   })
 
})