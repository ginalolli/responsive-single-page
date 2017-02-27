$(function() {
  var wheight = $(window).height(); //get height of window
  $('.fullheight').css('height', wheight);

  //recalculate if window is resized
  $(window).resize(function() {
    var wheight = $(window).height(); //get height of window
    $('.fullheight').css('height', wheight);
  })
});
