var countDownDate1 = new Date("Apr 15, 2021 00:00:00").getTime()
var countDownDate2 = new Date("Apr 15, 2021 00:00:00").getTime()

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now
  var distance2 = countDownDate2 - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance1 <= 0) {
    clearInterval(x)
    document.getElementById("days").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00"
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("seconds").innerHTML = "00"
  }

  if (distance2 <= 0) {
    document.querySelector(".registerBtn").style.display = "none"
    document.querySelector("#hideRegister").style.display = "none"
    let registrationClosed = document.querySelector("#registrationClosed")
    registrationClosed.innerHTML = "Registrations Closed!!!"
    registrationClosed.style.display = "inline"
  }
}, 1000)

x
