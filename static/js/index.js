jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#scroll").fadeIn()
    } else {
      jQuery("#scroll").fadeOut()
    }
  })
  jQuery("#scroll").click(function () {
    // jQuery("html, body").animate({ scrollTop: 0 }, 400)
    // return false
  })
})
