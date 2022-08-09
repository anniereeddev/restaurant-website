//  $('.firstSlide').click(function(e) {  


//         if(active==4){
//           prev = 4; active = 1; next = 2;
//           $('.slide[data-index='+active+']').addClass('show');
//           $('.slide[data-index='+prev+']').removeClass('show'); 
//         } else {

//             $('.slide[data-index='+active+']').removeClass('show'); 
//             $('.slide[data-index='+next+']').addClass('show'); 
//             if (prev == 4) {
//                 prev = 0;
//             }
//             prev++; 
//             active++;
//             next++;
//         }

//         console.log('prev'+prev);
//         console.log('active'+active);
//         console.log('next'+next);
//       });

//       $('.secondSlide').click(function(e) {  

//         if(active==1){
//           prev = 3; active = 4; next = 1;
//           $('.slide[data-index='+active+']').addClass('show');
//           $('.slide[data-index='+next+']').removeClass('show'); 
//         } else {
//             $('.slide[data-index='+active+']').removeClass('show'); 
//             $('.slide[data-index='+prev+']').addClass('show'); 
//             prev--; 
//             active--;
//             if (next == 1) {
//                 next = 5;
//             }
//             next--;
//         }


//         console.log('prev'+prev);
//         console.log('active'+active);
//         console.log('next'+next);
//       });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 