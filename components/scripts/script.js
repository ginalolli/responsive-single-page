$(function() {
  var topoffset = 43;
  var wheight = $(window).height(); //get height of window
  $('.fullheight').css('height', wheight);

  //recalculate if window is resized
  $(window).resize(function() {
    var wheight = $(window).height(); //get height of window
    $('.fullheight').css('height', wheight);
  })


  //CSS-TRICKS smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-topoffset //top minus topoffset
        }, 1000);
        return false;
      }
    }
  });

  //highlight menu items
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if(windowpos > $('#hotelinfo').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#hotelinfo"]').addClass('active');
    }
    if(windowpos > $('#rooms').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    }
    if(windowpos > $('#rooms').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    }
    if(windowpos > $('#events').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#events"]').addClass('active');
    }
    if(windowpos > $('#attractions').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#attractions"]').addClass('active');
    }
  });


  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });
  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);

  var roomOrigin = {
    bottom: -700,
    opacity: 0,
    scale: 0
  };
  
  //room animations
  //various options found at https://greensock.com/tweenmax
  var roomDest = {
    repeat: 1,
    yoyo: true,
    bottom: 0,
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  };

  var roomTween = TweenMax.staggerFromTo("#westminster .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#westminster',
    offset: -topoffset,
    duration: 500
  }).setPin('#westminster').setTween(roomTween).addTo(controller);

  var roomTween = TweenMax.staggerFromTo("#cambridge .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#cambridge',
    offset: -topoffset,
    duration: 500
  }).setPin('#cambridge').setTween(roomTween).addTo(controller);

  var roomTween = TweenMax.staggerFromTo("#piccadilly .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#piccadilly',
    offset: -topoffset,
    duration: 500
  }).setPin('#piccadilly').setTween(roomTween).addTo(controller);

  var roomTween = TweenMax.staggerFromTo("#oxford .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#oxford',
    offset: -topoffset,
    duration: 500
  }).setPin('#oxford').setTween(roomTween).addTo(controller);

  var roomTween = TweenMax.staggerFromTo("#victoria .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#victoria',
    offset: -topoffset,
    duration: 500
  }).setPin('#victoria').setTween(roomTween).addTo(controller);

  var roomTween = TweenMax.staggerFromTo("#manchester .content", 1, roomOrigin, roomDest);
  var pin = new ScrollScene({
    triggerElement: '#manchester',
    offset: -topoffset,
    duration: 500
  }).setPin('#manchester').setTween(roomTween).addTo(controller);


  //attractions animation
  var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 },
      {delay: 1, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset
  }).setTween(attractionstween)
    .addTo(controller);
}); //on load
