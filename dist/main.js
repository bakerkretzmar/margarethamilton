// Debugging
var debugFrames = document.querySelector('#debugFrames');
var debugExplode = document.querySelector('#debugExplode');
var debugCenter = document.querySelector('#debugCenter');

function debugFramesUpdate() {
    document.querySelector('#frames').classList.toggle('visible');
}
function debugExplodeUpdate() {
    document.body.classList.toggle('explode');
}
function debugCenterUpdate() {
    document.querySelector('#center').classList.toggle('visible');
}

debugFrames.addEventListener('click', debugFramesUpdate);
debugExplode.addEventListener('click', debugExplodeUpdate);
debugCenter.addEventListener('click', debugCenterUpdate);

// Prevent default arrow key behaviour
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// Create smooth scrolling nudges using arrow keys
$(function() {
  $(window).keydown(function(key) {
    if (key.which == 37) {
      var sL = $('.parallax').scrollLeft();
      sL -= 80;
      $('.parallax').animate({scrollLeft: sL}, 400);
    } else if (key.which == 38) {
      var sU = $('.parallax').scrollTop();
      sU -= 80;
      $('.parallax').animate({scrollTop: sU}, 400);
    } else if (key.which == 39) {
      var sR = $('.parallax').scrollLeft();
      sR += 80;
      $('.parallax').animate({scrollLeft: sR}, 400);
    } else if (key.which == 40) {
      var sD = $('.parallax').scrollTop();
      sD += 80;
      $('.parallax').animate({scrollTop: sD}, 400);
    };
  });
});

// Scroll to center
$(function() {
  $(".parallax").scrollTop(350);
  $(".parallax").scrollLeft(600);
})

// Loading
$(function() {
  $('#loading #top').animate({right:'0px'}, 200, function() {
    $('#loading #right').animate({bottom:'0px'}, 200, function() {
      $('#loading #bottom').animate({left:'0px'}, 200, function() {
        $('#loading #left').animate({top:'0px'}, 200, function() {
          $('#loading #wait').animate({opacity: '0'}, 900, function() {
            $('#loading #wait').css({display: 'none'});
          });
        });
      });
    });
  });
})

// Popups
$(function() {
  $('.project h1').click(function() {
    $(this).parent().children('.popup').slideDown(100);
  });
  $('.popup #close').click(function() {
    $(this).parent().slideUp(100);
  });
});
