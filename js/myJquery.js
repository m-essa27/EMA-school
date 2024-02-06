/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  'use strict';
  if ($(".main-slider").length) {
    var swiper = new Swiper('.main-slider', {
      speed: 3000,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    });
  }

  $('#navbarNav').on('show.bs.collapse', function () {
    $("#sitemenu").addClass('menuopen');
  });

  $('#navbarNav').on('hide.bs.collapse', function () {
    $("#sitemenu").removeClass('menuopen');
  });


  var sitenav = $("#sitemenu");
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    sitenav.addClass('scrolled');
  } else {
    sitenav.removeClass('scrolled');
  };


  $(document).on('load scroll', function () {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      sitenav.addClass('scrolled');
    } else {
      sitenav.removeClass('scrolled');
    };

  });

  $('.custom-file-input').on('change', function (e) {

    var fileName = e.target.files[0].name;

    $(this).next('.custom-file-label').html(fileName);
  })

  var swiper2 = new Swiper('.persons-slider', {
    speed: 1400,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',

    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

  });
  $('.custom-file-input').on('change', function (e) {
    var fileNames = '';
    for (var i = 0; i < e.target.files.length; i++) {
      fileNames += e.target.files[i].name + ', ';
    }
    fileNames = fileNames.slice(0, -2);
    $(this).next('.custom-file-label').html(fileNames);
  });


  if ($('date-inp').length) {
    flatpickr(".date-inp", {
      // Options go here
    });

  }


});