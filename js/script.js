$(document).ready(function(){
  $('.menu-toggler').click(function(){
    $('.menu').toggleClass('visible');
  });
});

// nawigacja ruchoma
jQuery(function ($) {
    var scrollingStartDistance = $("#navigations").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        
        $("#navigations").toggleClass("scrolling", scrollTop > scrollingStartDistance);
    });
});