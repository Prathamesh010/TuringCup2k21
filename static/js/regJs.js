var hidreg = document.getElementsByClassName("reg")[0]
var itemo = document.getElementsByClassName("item")
var form = document.getElementsByClassName("form-cont")[0]

function hideReg() {
  hidreg.style.display = "none"
  form.style.display = "flex"
  itemo[0].className = "item fade-in-bottom"
}

var count = 0
function nql() {
  count++
  itemo[count - 1].className = "item fade-out-up"
  itemo[count - 1].style.display = "none"
  itemo[count].style.display = "flex"
  itemo[count].className = "item fade-in-bottom"
}

function pql() {
  count--
  itemo[count + 1].className = "item fade-out-bottom"
  itemo[count + 1].style.display = "none"
  itemo[count].style.display = "flex"
  itemo[count].className = "item fade-in-top"
}
