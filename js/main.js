$(document).ready(function () {
  //ShowPassword
  $(".eye-show").on("click", function () {
    input = $(this).parent().children(".password");
    inputType = input.attr("type");
    if (inputType == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".owl-carousel.owl-categories").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      "<img src='../images/Group-1045.png' height='40' width='40'>",
      "<img src='../images/Group-1046.png' height='40' width='40'>",
    ],
    autoplayTimeout: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".owl-carousel.owl-products").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      "<img src='../images/Group-1045.png' height='40' width='40'>",
      "<img src='../images/Group-1046.png' height='40' width='40'>",
    ],
    autoplayTimeout: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });



  $(".owl-carousel.owl-modal").owlCarousel({
    margin: 25,
    nav: false,
    autoplayTimeout: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

      //Increment & Decrement counter
      var btnAdd = document.getElementsByClassName('add');
      var btnSubtract = document.getElementsByClassName('subtract');
      //Increment
      for(var i = 0 ; i < btnAdd.length ; i++) {
          var Increment = btnAdd[i];
          Increment.addEventListener('click' , function(e){
              var ButtonClicked = e.target;
              var input = ButtonClicked.parentElement.children[1];
              var inputValue = input.value;
              var newValue = parseInt(inputValue) + 1;
              input.value = newValue;
          });
      }
      //Decrement
      for(var i = 0 ; i < btnSubtract.length ; i++) {
          var Decrement = btnSubtract[i];
          Decrement.addEventListener('click' , function(e){
              var ButtonClicked = e.target;
              var input = ButtonClicked.parentElement.children[1];
              var inputValue = input.value;
              var newValue = parseInt(inputValue) - 1;
              if(newValue >= 0){
                  input.value = newValue;
              }
              else{
                  input.value = 0;
              }
              
          });
      }

      new WOW().init();

});
