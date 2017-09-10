// 
$(document).ready(function(){
  $('.menu-toggler').click(function(){
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
