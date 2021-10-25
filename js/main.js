const toggleMenuBtns = $(".navbar-toggler img");
const formFooter = $("footer form");
const inputEmail = $("footer form input[type='email']");
const submitBtn = $("footer form input[type='submit']");

$(document).ready(function () {
  // toggleMeun Buttons
  $(".menu-icon").on("click", function () {
    $(this).removeClass("active").next("img").addClass("active");
    addOverlayAndLockedScroll();
  });

  $(".close-icon").on("click", function () {
    $(this).removeClass("active").prev("img").addClass("active");
    removeOverlayAndLockedScroll();
  });

  // When you click Overlay, hide Mobile Nav Menu, overlay and unlock scrollbar
  $(".overlay").on("click", function () {
    $(".close-icon").removeClass("active").prev("img").addClass("active");
    removeOverlayAndLockedScroll();
    $(".navbar-toggler").click();
  });

  // When you click on submit Button, check some conditions to show message
  submitBtn.on("click", function (e) {
    e.preventDefault();

    if ($(this).parent().has(".message")) {
      // Check if there's any old message
      $(this).parent().children(".message").remove(); // remove any old message
    }

    if (inputEmail.val().trim() == "" || !inputEmail.val().includes("@")) {
      // Check if Input Email is not empty or doesn't contain @

      $("<p></p>", {
        // Create new Element p with specific text, class and append to form
        text: "Please insert a valid email",
        class: "message",
      }).appendTo($(this).parent());

      inputEmail.css("border-color", "hsl(12, 88%, 59%)"); // Change border-color for Input Email
    } else {
      $(this).parent().submit(); // Submit form if the email is correctly written
    }
  });

  // When Input Email is focused, Remove border-color and Message
  inputEmail.on("focus", function () {
    $(this).css("border-color", "transparent");
    if ($(this).siblings().is(".message")) {
      $(this).siblings(".message").remove();
    }
  });

  // Helper Functions
  function addOverlayAndLockedScroll() {
    $(".landing .overlay").addClass("visible");
    $("html body").addClass("scroll-locked");
  }

  function removeOverlayAndLockedScroll() {
    $(".landing .overlay").removeClass("visible");
    $("html body").removeClass("scroll-locked");
  }

  /* jQuery Plugins */
  $(".carousel").carousel({
    interval: 2000, // specify Interval time "2 seconds" for Carousel Silder
  });

  // Specify Options for Slick Slider
  $(".slick-silder").slick({
    slidesToShow: 3, // number of slides to show
    slidesToScroll: 1, // number of slides to scroll
    autoplay: true, // run autoplay
    autoplaySpeed: 2000, // specify autoplay time 2 seconds
  });
});
