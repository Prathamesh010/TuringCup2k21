jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#scroll").fadeIn()
    } else {
      jQuery("#scroll").fadeOut()
    }
  })
})

$(function () {
  AOS.init({
    offset: 100,
    duration: 1000,
  })
})

window.addEventListener("load", AOS.refresh)
