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
  hidreg.style.display = "none"
  form.style.display = "flex"
  itemo[0].className = "item fade-in-bottom"
  itemo[0].style.display = "flex"
  inputFields[0].focus()
}

function nql() {
  if (count == 2) {
    if (inputFields[count].value == "") {
      question[count].className = "question shake-horizontal"
      setTimeout(function () {
        question[count].className = "question"
      }, 500)
    } else if (!validateEmail(inputFields[count].value)) {
      alert("invalid email")
    } else {
      count++
      itemo[count - 1].className = "item fade-out-up"
      itemo[count - 1].style.display = "none"
      itemo[count].style.display = "flex"
      itemo[count].className = "item fade-in-bottom"
      inputFields[count].focus()
    }
  } else if (count == 6) {
  } else if (inputFields[count].value == "" && count != 4 && count != 5) {
    question[count].className = "question shake-horizontal"
    setTimeout(function () {
      question[count].className = "question"
    }, 500)
  } else {
    count++
    itemo[count - 1].className = "item fade-out-up"
    itemo[count - 1].style.display = "none"
    itemo[count].style.display = "flex"
    itemo[count].className = "item fade-in-bottom"
    inputFields[count].focus()
  }
  console.log(count)
}

function submitForm() {
  console.log(`value: ${inputFields[6].value}`)
  if (inputFields[6].value == "") {
    question[count].className = "question shake-horizontal"
    setTimeout(function () {
      question[count].className = "question"
    }, 500)
  } else {
    form.submit()
  }
}

function pql() {
  console.log(count)
  itemo[count].className = "item fade-out-bottom"
  itemo[count].style.display = "none"
  console.log(itemo[count - 1])
  itemo[count - 1].style.display = "flex"
  itemo[count - 1].className = "item fade-in-top"
  count--
}

function showReg() {
  itemo[0].className = "item fade-out-bottom"
  itemo[0].style.display = "none"
  itemo[0].className = "item"
  form.style.display = "none"
  hidreg.style.display = "flex"
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
