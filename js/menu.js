$(function(){
  var setImg = '#sake-photo2';
  var fadeSpeed = 1600;
  var switchDelay = 5000;

  $(setImg).children('img').css({opacity:'0'});
  $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

  setInterval(function(){
      $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
  },switchDelay);
});


$(function() {
  $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 4,
      cssEase: 'ease',
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 2000,
  });
});


$(document).ready(function() {
 
  let $pagetop = $('.scrollTop');

  $(window).on( 'scroll', function () {
      //スクロール位置を取得
      if ( $(this).scrollTop() < 40 ) {
          $pagetop.removeClass('isActive');
      } else {
          $pagetop.addClass('isActive');
      }
  });

  //ページ内リンクスムーススクロール
  $('a[href="#"]').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop: position}, 550, "swing");
      return false;
  });
});