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

$(function() {
  $(".parallax").scrollTop(350);
  $(".parallax").scrollLeft(600);
})
