var state = [0, 0, 0, 0, 0, 0, 0]
var x = document.getElementsByClassName("faq-item")
x[0].addEventListener("click", () => {
  if (!state[0]) x[0].className = "faq-item expand"
  else x[0].className = "faq-item"
  state[0] = !state[0]
  for (var i = 1; i < x.length; i++) {
    if (state[i] == 1) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[1].addEventListener("click", () => {
  if (!state[1]) x[1].className = "faq-item expand"
  else x[1].className = "faq-item"
  state[1] = !state[1]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 1) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[2].addEventListener("click", () => {
  if (!state[2]) x[2].className = "faq-item expand"
  else x[2].className = "faq-item"
  state[2] = !state[2]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 2) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[3].addEventListener("click", () => {
  if (!state[3]) x[3].className = "faq-item expand"
  else x[3].className = "faq-item"
  state[3] = !state[3]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 3) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[4].addEventListener("click", () => {
  if (!state[4]) x[4].className = "faq-item expand"
  else x[4].className = "faq-item"
  state[4] = !state[4]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 4) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[5].addEventListener("click", () => {
  if (!state[5]) x[5].className = "faq-item expand"
  else x[5].className = "faq-item"
  state[5] = !state[5]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 5) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
x[6].addEventListener("click", () => {
  if (!state[6]) x[6].className = "faq-item expand"
  else x[6].className = "faq-item"
  state[6] = !state[6]
  for (var i = 0; i < x.length; i++) {
    if (state[i] == 1 && i != 6) {
      x[i].className = "faq-item"
      state[i] = !state[i]
    }
  }
})
