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
