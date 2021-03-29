var hidreg = document.getElementsByClassName("reg")[0]
var itemo = document.getElementsByClassName("item")
var inputFields = document.getElementsByClassName("ans-input")
var question = document.getElementsByClassName("question")
var form = document.getElementsByClassName("form-cont")[0]

console.log(itemo)
console.log(question)
console.log(inputFields)

var count = 0
function hideReg() {
  console.log(count)
  hidreg.style.display = "none"
  form.style.display = "flex"
  itemo[0].className = "item fade-in-bottom"
  inputFields[0].focus()
}

function nql() {
  console.log(count)
  if (inputFields[count].value == "" && count != 4 && count != 5) {
    question[count].className = "question shake-horizontal"
    setTimeout(function () {
      question[count].className = "question"
    }, 500)
  } else if (count == 6) {
    form.submit()
  } else {
    count++
    itemo[count - 1].className = "item fade-out-up"
    itemo[count - 1].style.display = "none"
    itemo[count].style.display = "flex"
    itemo[count].className = "item fade-in-bottom"
    inputFields[count].focus()
  }
}

function pql() {
  count--
  itemo[count + 1].className = "item fade-out-bottom"
  itemo[count + 1].style.display = "none"
  itemo[count].style.display = "flex"
  itemo[count].className = "item fade-in-top"
}
