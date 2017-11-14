
// MENU SCROLL
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      // $('a').each(function () {
      //     $(this).parent().removeClass('active');
      // })
      // $(this).parent().addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('menu a').each(function () {
      
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
     
      if (!refElement.position()) return;

      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('menu ul li a').removeClass("active");
          $('menu ul li').removeClass("active");

          currLink.parents('li').addClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}