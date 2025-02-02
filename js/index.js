$(function(){
  var setImg = '.fade-picture';
  var fadeSpeed = 3000;
  var switchDelay = 2000;

  $(setImg).children('.slide').css({
      opacity: '0'
  });
  $(setImg + ' .slide:first').stop().animate({
      opacity: '1',
      zIndex: '20'
  }, fadeSpeed);

  setInterval(function() {
      $(setImg + ' :first-child').animate({
          opacity: '0'
      }, fadeSpeed).next('.slide').animate({
          opacity: '1'
      }, fadeSpeed).end().appendTo(setImg);
  }, switchDelay);
});

$(function(){
    $(window).scroll(function (){
        $('.okan').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});