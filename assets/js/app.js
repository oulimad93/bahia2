window.$ = window.jQuery = require('jquery')
require('bootstrap')
require('slick-carousel')
require('lightgallery')
require('masonry-layout')

$(document).ready(() => {
  $("#projects-slider").slick({
    autoplay:true,
    autoplaySpeed:1500,
    centerMode: true,
    prevArrow: $("#project-prev"),
    nextArrow: $("#project-next"),
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 1580,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });
})

$(document).ready(function(){
  $('#lightgallery').lightGallery({
    fullScreen:false,
    toogleThumb:false,
    share:false,
    download:false,
    autoplayControls:false,
    actualSize:false,
    showThumbByDefault:true,
    selector: '.grid-item-image'
  });
});

$(document).ready(function(){
  $('.grid-masonry').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});
