window.$ = window.jQuery = require('jquery')
require('bootstrap')
require('slick-carousel')

$(document).ready(() => {
  $('#projects-slider').slick({
    centerMode: true,
    prevArrow: $('#project-prev'),
    nextArrow: $('#project-next'),
    centerPadding: '100px',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000
  })
})
