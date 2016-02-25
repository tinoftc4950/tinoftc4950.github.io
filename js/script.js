/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function() {

    // OPENING MESSAGE
    console.log('%c Think this website is awesome? \n Want more? \n Head over to my website at http://kirankunigiri.com/ ', 'font-family: Open Sans; font-size: 15px;');

    // START ANIMATION
    startAnimation();

    // SIZE COVER
    $(".cover").height($(window).height());
    $(".cover").width($(window).width());

    // SETUP BIOS
    setupTheTeam();

    // Menu link clicks
    $('a').on("click", function(e) {
        var link = $(this).attr("href");
        e.preventDefault();
        TweenLite.to(window, 1, {
            scrollTo: {
                y: $(link).offset().top
            },
            ease: Power3.easeOut
        });
    });


    // RESIZE WINDOW
    $(window).resize(function() {
        $(".cover").height($(window).height());
        $(".cover").width($(window).width());
        setupTheTeam();
    });


});

function startAnimation() {
    var width = $(window).width();
    var height = $(window).height();
    var tl = new TimelineLite();
    
    // DISABLED FOR PROGRAMMING
    disableScroll();

    //    tl.from("#4", 1, {
    //        x: -width - $("#4").width(),
    //        rotation: -480,
    //        ease: Circ.easeOut
    //    }, '-= 0.5').from("#9", 1, {
    //        x: -$("#9").offset().left - $("#9").width(),
    //        ease: Power4.easeOut
    //    }, '-= 0.5').from("#5", 1, {
    //        x: width - $("#5").offset().left + $("#5").width(),
    //        ease: Power4.easeOut
    //    }, '-= 0.5').from("#0", 1, {
    //        x: width + $("#0").width(),
    //        rotation: -480,
    //        ease: Circ.easeOut
    //    }, '-= 0.5').from(".subtitle", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 0.5').from(".scrollButton", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1')

    //    tl.from("#4", 1, {
    //        y: -$("#4").offset().top - $("#4").height(),
    //        ease: Power4.easeOut
    //    }, '-= 0.7').from("#9", 1, {
    //        y: height - $("#9").offset().top + $("#9").height(),
    //        ease: Power4.easeOut
    //    }, '-= 0.7').from("#5", 1, {
    //        y: -$("#5").offset().top - $("#5").height(),
    //        ease: Power4.easeOut
    //    }, '-= 0.7').from("#0", 1, {
    //        y: height - $("#0").offset().top + $("#0").height(),
    //        ease: Power4.easeOut
    //    }, '-= 0.7').from(".subtitle", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 0.5').from(".scrollButton", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1')

    // SLIDE IN BETWEEN
    var animationHeight = height - $("#0").offset().top + $("#0").height();
    TweenLite.set(".video", {
        y: -width
    });

    tl.from("#4", 1, {
        y: -animationHeight,
        ease: Power4.easeOut
    }, '+= 1').from("#9", 1, {
        y: animationHeight,
        ease: Power4.easeOut
    }, '-= 1').from("#5", 1, {
        y: -animationHeight,
        ease: Power4.easeOut
    }, '-= 1').from("#0", 1, {
        y: animationHeight,
        ease: Power4.easeOut
    }, '-= 1').from(".subtitle", 1, {
        opacity: 0,
        ease: Power4.easeOut
    }, '-= 0').from(".scrollButton", 1, {
        opacity: 0,
        ease: Power4.easeOut
    }, '-= 1').to(".title", 1, {
        color: "#f0f8ff",
        ease: Power4.easeOut
    }, '+= 0.5').to(".subtitle", 1, {
        color: "#f0f8ff",
        ease: Power4.easeOut
    }, '-= 1').to(".video", 1, {
        y: 0,
        ease: Power4.easeOut
    }, '-= 1')
    
    tl.append(TweenLite.delayedCall(0, function() {
        enableScroll();
    }));


    // SMOOTH
    //    tl.from(".title", 2.5, {
    //        y: -animationHeight,
    //        ease: Bounce.easeIn
    //    }, '+= 1').from(".subtitle", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 0').from(".scrollButton", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1').to(".title", 1, {
    //        color: "#f0f8ff",
    //        ease: Power4.easeOut
    //    }, '+= 0.5').to(".subtitle", 1, {
    //        color: "#f0f8ff",
    //        ease: Power4.easeOut
    //    }, '-= 1').to(".video", 1, {
    //        y: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1')

    // BOUNCE
    //    tl.from(".title", 2.5, {
    //        y: height - $(".title").height() - 80,
    //        ease: Bounce.easeIn
    //    }, '+= 1').from(".subtitle", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 0').from(".scrollButton", 1, {
    //        opacity: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1').to(".title", 1, {
    //        color: "#f0f8ff",
    //        ease: Power4.easeOut
    //    }, '+= 0.5').to(".subtitle", 1, {
    //        color: "#f0f8ff",
    //        ease: Power4.easeOut
    //    }, '-= 1').to(".video", 1, {
    //        y: 0,
    //        ease: Power4.easeOut
    //    }, '-= 1')
}


function setupTheTeam() {
    var windowWidth = $(window).width();
    var isMobile = windowWidth <= 500;
    console.log(windowWidth);

    // SETUP
    //    $(".overlayContainer").hide();
    TweenLite.set(".overlayContainer", {
        scaleX: 0,
        scaleY: 0
    });

    var numC = 7;
    if (windowWidth <= 1100) {
        numC = 5
    }
    if (windowWidth <= 800) {
        numC = 4;
    }
    if (windowWidth <= 600) {
        numC = 3;
        width = windowWidth / 3;
    }
    if (windowWidth <= 500) {
        numC = 2;
    }
    var width = windowWidth / numC;
    var numBoxes = $(".box").length;
    $(".box").each(function(index) {
        if (index >= numBoxes - (numBoxes % numC)) {
            $(this).width(windowWidth / (numBoxes % numC));
            $(this).height(width);
        } else {
            $(this).width(width);
            $(this).height(width);
        }
    });

    var boxHeight = $(".box").height();
    var boxPosition = boxHeight / 4 * 3;
    TweenLite.set(".boxOverlay", {
        y: boxPosition
    });


    // Close button
    $('.xbtn').on("click", function(e) {
        e.preventDefault();
        enableScroll();
        TweenLite.to($(".overlayContainer"), 0.5, {
            scaleX: 0,
            scaleY: 0,
            ease: Power4.easeOut
        });
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $(".xbtn").trigger("click");
        }
    });

    $('.box, .boxOverlay').on("click", function(e) {
        e.preventDefault();
        disableScroll();
        
        var titleText = $(this).find('.personName:first').text();
        var positionText = $(this).find('.personPosition:first').text();
        var bioText = $(this).find('.personBio:first').text();

        $(".overlayContainer").find('.coverTitle:first').text(titleText);
        $(".overlayContainer").find('.coverPosition:first').text(positionText);
        $(".overlayContainer").find('.coverDescription:first').text(bioText);

        var overlayHeight = $(".text").height();
        $(this).find('.overlay:first').height(overlayHeight);
        console.log($(this).find('.overlay:first').height());

        //        $(".overlayContainer").show();
        TweenLite.to($(".overlayContainer"), 0.5, {
            scaleX: 1,
            scaleY: 1,
            ease: Power4.easeOut
        });
    });

    // Actions
    if (!isMobile) {
        $(".box").hover(
            function() {
                var label = $(this).find('p:first');
                var positionText = $(this).find('.personPosition:first').html();
                label.html(positionText);
                label.css("margin-top", "40%");
                TweenLite.to($(this).find('.boxOverlay:first'), 0.5, {
                    y: 0,
                    ease: Power4.easeOut
                });
            },
            function() {
                var label = $(this).find('p:first');
                var positionText = $(this).find('.personName:first').html();
                label.html(positionText);
                label.css("margin-top", "5%");
                TweenLite.to($(this).find('.boxOverlay:first'), 0.5, {
                    y: boxPosition,
                    ease: Power4.easeOut
                });
            }
        );
    }

}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}