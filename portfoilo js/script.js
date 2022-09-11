let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{
  
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");  




  console.log(document.getElementById('progress'));
document.getElementById("anchor-skill").addEventListener("click", () => {
  document.getElementById('progress').classList.remove("bar");
  
  setTimeout(() => {
    document.getElementById('progress').classList.add("bar");
  }, 100);
   
    

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






//   var i = 0;
// function move() {
//   console.log('hi')
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("progress");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 70) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }




  // $(document).ready(function(){

  //   $('#menu-bar').click(function(){
  //     $(this).toggleClass('fa-times');
  //     $('header').toggleClass('toggle');
  //   });
  
  //   $(window).on('scroll load',function(){
  
  //     $('#menu-bar').removeClass('fa-times');
  //     $('header').removeClass('toggle');
  
  //     if($(window).scroll-top() > 0){
  //       $('.top').show();
  //     }else{
  //       $('.top').hide();
  //     }
  
  //   });
  
  //   // smooth scrolling 
  
  //   $('a[href*="#"]').on('click',function(e){
  
  //     e.preventDefault();
  
  //     $('html, body').animate({
  
  //       scrollTop : $($(this).attr('href')).offset().top,
  
  //     },
  //       500, 
  //       'linear'
  //     );
  
  //   });
  
  // });