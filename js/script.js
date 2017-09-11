// płynne przewijanie menu
$(document).on('click', '.section-pointer', function(event){
      event.preventDefault();
      $('body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 90 //(50 wysokość menu)
      }, 800);
  });

// hamburger
$(document).ready(function(){
  $('.menu-toggler').click(function(e){
    e.preventDefault();
    $('.menu').toggleClass('visible');
  });
});

// nawigacja ruchoma
jQuery(function ($) {
    var scrollingStartDistance = $(".navigation").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        
        $(".navigation").toggleClass("scrolling", scrollTop > scrollingStartDistance);
    });
});

// carousel
$(function(){
  var carouselList = $("#carousel ul");

  setInterval(changeSlide, 2000); //co 2 sek. wykona funkcję zmieniającą slajd. 
  
  function changeSlide(){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);    
  }

  function moveFirstSlide(){ 
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }
});
