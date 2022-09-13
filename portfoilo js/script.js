
  console.log(document.getElementById('progress'));
document.getElementById("anchor-skill").addEventListener("click", () => {
  document.getElementById('progress').classList.remove("bar");
  
  setTimeout(() => {
    document.getElementById('progress').classList.add("bar");
  }, 500);
   
    

})



var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;  
    if (st > lastScrollTop) {
      document.getElementById('progress').classList.remove("bar");
    } else {
      document.getElementById('progress').classList.add("bar");
    }
    lastScrollTop = st <= 0 ? 0 : st; 
  },
  false
);





  $(document).ready(function(){

    $('#menu-bar').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle'); 
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu-bar').removeClass('fa-times');
      $('header').removeClass('toggle');

      
  
      
  
    });
  
  
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        100, 
        'linear'
      );
  
    });
  
  });
