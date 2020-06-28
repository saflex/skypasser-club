 var swiper = new Swiper('.swiper-container1', {
     pagination: '.swiper-pagination',
     effect: 'fade',
     slideToClickedSlide: true,
     paginationClickable: true,
     autoplay: 2500,
     speed: 1200,
     loop: true,
     centeredSlides: true,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     slidesPerView: 'auto',
     coverflow: {
         rotate: 0,
         stretch: 0,
         depth: 11180,
         modifier: 1,
         slideShadows: false
     }
 });


 var swiper = new Swiper('.swiper-container2', {
     pagination: '.swiper-pagination',
     paginationClickable: true,
     autoplay: 2500,
     speed: 1200,

     direction: 'vertical'
 });


 /**
  * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
  */
 $(function() {
     function reposition() {
         var modal = $(this),
             dialog = modal.find('.modal-dialog');
         modal.css('display', 'block');

         // Dividing by two centers the modal exactly, but dividing by three 
         // or four works better for larger screens.
         dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
     }
     // Reposition when a modal is shown
     $('.modal').on('show.bs.modal', reposition);
     // Reposition when the window is resized
     $(window).on('resize', function() {
         $('.modal:visible').each(reposition);
     });
 });






 $(document).ready(function() {
     $("#rooms").change(function() {
         if ($('#rooms').val() == "2 комнаты") {
             $("#nowshow1").show();
             $("#ll2").text("Взрослые комната 2");
         } else {
             $("#nowshow1").hide();
             $("#ll1").text("Взрослые");
             $("#ll2").text("Взрослые");
         }


         if ($('#rooms').val() == "3 комнаты") {
             $("#nowshow2").show();
             $("#ql1").text("Взрослые комната 2");
             $("#ql2").text("Взрослые комната 3");
         } else {
             $("#nowshow2").hide();
             $("#ll1").text("Взрослые");
             $("#ql1").text("Взрослые");
             $("#ql2").text("Взрослые");
         }
     });
 });



 $(document).ready(function() {
     $("#childs1").change(function() {
         if ($(this).val() == "2") {
             $(".hide-one").addClass("wds50a");
             $("#childsar").addClass("show-all2a");
             $(".noactives").hide();

         } else {
             $(".hide-one").removeClass("wds50a");
             $("#childsar").removeClass("show-all2a");
         }
     });

     $("#childs1").change(function() {
         if ($(this).val() == "1") {
             $(".noactives").hide();

         } else {

         }
     });


     $("#childs1").change(function() {
         if ($(this).val() == "0") {
             $(".noactives").show();

         } else {
             $(".noactives").hide();
         }
     });


 });




 $(function() {
     $('.disp-bl').click(function() {

         $('html,body').stop().animate({ scrollTop: $('.rtdsss').offset().top }, 700);
     });
 });


 $(document).ready(function() {
     $("#childs3").change(function() {
         if ($(this).val() == "2") {
             $(".hide-one3").addClass("wds50a3");
             $("#childsar3").addClass("show-all2a3");
             $(".noactives2").hide();

         } else {
             $(".hide-one3").removeClass("wds50a3");
             $("#childsar3").removeClass("show-all2a3");
         }
     });

     $("#childs3").change(function() {
         if ($(this).val() == "1") {
             $(".noactives3").hide();

         } else {

         }
     });


     $("#childs3").change(function() {
         if ($(this).val() == "0") {
             $(".noactives3").show();

         } else {
             $(".noactives3").hide();
         }
     });


 });





 $(document).ready(function() {
     $("#childs4").change(function() {
         if ($(this).val() == "2") {
             $(".hide-one4").addClass("wds50a4");
             $("#childsar4").addClass("show-all2a4");
             $(".noactives4").hide();

         } else {
             $(".hide-one4").removeClass("wds50a4");
             $("#childsar4").removeClass("show-all2a4");
         }
     });

     $("#childs4").change(function() {
         if ($(this).val() == "1") {
             $(".noactives4").hide();

         } else {

         }
     });


     $("#childs4").change(function() {
         if ($(this).val() == "0") {
             $(".noactives4").show();

         } else {
             $(".noactives4").hide();
         }
     });


 });






 $(document).ready(function() {
     $("#childs2").change(function() {
         if ($(this).val() == "2") {
             $(".hide-one2").addClass("wds50a2");
             $("#childsar2").addClass("show-all2a2");
             $(".noactives2").hide();

         } else {
             $(".hide-one2").removeClass("wds50a2");
             $("#childsar2").removeClass("show-all2a2");
         }
     });

     $("#childs2").change(function() {
         if ($(this).val() == "1") {
             $(".noactives2").hide();

         } else {

         }
     });


     $("#childs2").change(function() {
         if ($(this).val() == "0") {
             $(".noactives2").show();

         } else {
             $(".noactives2").hide();
         }
     });


 });


 $(document).ready(function() {

     $('.sin').slick({
         dots: false,
         infinite: false,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 991,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,

             }
         }, {
             breakpoint: 700,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]
     });

 });



 $(document).ready(function() {

     $('.autoplay').slick({
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 4000
     });

 });


 $('.autoplay2').slick({
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     arrows: true,
 });




 // mobile-viewport
 if (screen.width <= 400) {
     $('head').append('<meta name="viewport" content="width=400, user-scalable=0"/>');
 } else {
     $('head').append('<meta name="viewport" content="width=device-width">');
 }
 $(window).on("orientationchange", function() {
     if (window.orientation == 0) // Portrait 
     {
         $('head').append('<meta name="viewport" content="width=device-width">');
     } else // Landscape 
     {
         $('head').append('<meta name="viewport" content="width=640">');
     }
 });

 $(function() {

     $('.f1').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#m1').offset().top }, 700);
         e.preventDefault();
     });

 });


 $(function() {

     $('.f2').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#s2').offset().top }, 700);
         e.preventDefault();
     });

 });

 $(function() {

     $('.h2').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#s2').offset().top }, 700);
         e.preventDefault();
     });

 });
 $(function() {

     $('.sfg2').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#s2').offset().top }, 700);
         e.preventDefault();
     });

 });



 $(function() {

     $('.h3').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#footer-n').offset().top }, 700);
         e.preventDefault();
     });

 });

 (function($) {
     $(window).load(function() {

         $(".content-1").mCustomScrollbar({
             axis: "x",
             advanced: {
                 autoExpandHorizontalScroll: true
             }
         });


     });
 })(jQuery);


 $(".fg1").click(function() {
     $(".fh1").fadeIn("slow", function() {});
     $(".fh2").fadeOut("slow", function() {});
     $(".fh3").fadeOut("slow", function() {});
     $(".fh4").fadeOut("slow", function() {});
     $('#m1').addClass("hhhh1");
     $('html,body').stop().animate({ scrollTop: $('#m1').offset().top }, 700);
 });

 $(".fc1").click(function() {
     $('#m1').removeClass("hhhh1");
     $(".fh1").fadeOut("slow", function() {});
 });



 $(".fg2").click(function() {
     $(".fh2").fadeIn("slow", function() {});
     $('html,body').stop().animate({ scrollTop: $('#s3').offset().top }, 700);
     $('.s3').addClass("hhh1");
     $(".fh1").fadeOut("slow", function() {});
     $(".fh3").fadeOut("slow", function() {});
     $(".fh4").fadeOut("slow", function() {});

 });

 $(".fc2").click(function() {
     $(".fh2").fadeOut("slow", function() {});
     $('.s3').removeClass("hhh1");
 });


 $(".fg3").click(function() {
     $(".fh3").fadeIn("slow", function() {});
     $(".fh1").fadeOut("slow", function() {});
     $(".fh2").fadeOut("slow", function() {});
     $(".fh4").fadeOut("slow", function() {});
     $('html,body').stop().animate({ scrollTop: $('#n3').offset().top }, 700);
 });

 $(".fc3").click(function() {
     $(".fh3").fadeOut("slow", function() {});
 });


 $(".fg4").click(function() {
     $(".fh4").fadeIn("slow", function() {});
     $(".fh1").fadeOut("slow", function() {});
     $(".fh3").fadeOut("slow", function() {});
     $(".fh2").fadeOut("slow", function() {});
     $('html,body').addClass("fxtt");
 });

 $(".fc4").click(function() {
     $(".fh4").fadeOut("slow", function() {});
     $('html,body').removeClass("fxtt");
 });



 $(document).ready(function() {
     $('input,textarea').focus(function() {
         $(this).data('placeholder', $(this).attr('placeholder'))
         $(this).attr('placeholder', '');
     });
     $('input,textarea').blur(function() {
         $(this).attr('placeholder', $(this).data('placeholder'));
     });
 });