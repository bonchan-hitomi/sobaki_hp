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
    $('.okan-kotoba').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function(){
    $(window).scroll(function (){
        $('.okan2').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});