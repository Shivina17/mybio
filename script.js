var main = function() {
  
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    
    var currentLi = $('.active-li');
    var nextLi = currentLi.next();
    

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
      nextLi = $('.menu .li').first();
    }
    
    currentSlide.fadeOut(300).removeClass('active-slide');
    nextSlide.fadeIn(300).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    
    currentLi.removeClass('active-li');
    nextLi.addClass('active-li');
    
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
    var currentLi = $('.active-li');
    var nextLi = currentLi.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
       nextLi = $('.menu li').last();
    }
    
    currentSlide.fadeOut(300).removeClass('active-slide');
    prevSlide.fadeIn(300).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    
    currentLi.removeClass('active-li');
    nextLi.addClass('active-li');
  });

}

$(document).ready(main);
