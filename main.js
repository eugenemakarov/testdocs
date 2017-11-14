
// #############  MENU SCROLL ##################
// Source: https://jsfiddle.net/cse_tushar/Dxtyu/141/
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


// ################ /MENU SCROLL ################

$(".search").keyup(updateSearch).blur(removeSearch);

function updateSearch(e){
  console.log('ew')
  $(".search-result-header").text(e.target.value);
  
    removeSearch(e);
}

function removeSearch(e) {
  console.log('ew2')
  if (e.target.value && e.target.value.length > 0) {
    $(".search-overlay").css("opacity", 1);
    $(".search-overlay").css("display", block);
  } else {
    $(".search-overlay").css("opacity", 0);
    $(".search-overlay").css("display", none);
  }
}