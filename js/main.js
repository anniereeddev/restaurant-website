$('.secondSlide').click(function(e) {  


    if(active==4){
      prev = 4; active = 1; next = 2;
      $('.slide[data-index='+active+']').addClass('show');
      $('.slide[data-index='+prev+']').removeClass('show'); 
    } else {

        $('.slide[data-index='+active+']').removeClass('show'); 
        $('.slide[data-index='+next+']').addClass('show'); 
        if (prev == 4) {
            prev = 0;
        }
        prev++; 
        active++;
        next++;
    }

    console.log('prev'+prev);
    console.log('active'+active);
    console.log('next'+next);
  });

  $('.firstSlide').click(function(e) {  

    if(active==1){
      prev = 3; active = 4; next = 1;
      $('.slide[data-index='+active+']').addClass('show');
      $('.slide[data-index='+next+']').removeClass('show'); 
    } else {
        $('.slide[data-index='+active+']').removeClass('show'); 
        $('.slide[data-index='+prev+']').addClass('show'); 
        prev--; 
        active--;
        if (next == 1) {
            next = 5;
        }
        next--;
    }


    console.log('prev'+prev);
    console.log('active'+active);
    console.log('next'+next);
  });