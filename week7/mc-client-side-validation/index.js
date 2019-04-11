var emailError = document.getElementById('emailError')
var passwordError = document.getElementById('passwordError')

document.getElementById('registerForm').addEventListener('submit', function(e){
  e.preventDefault()
  if (!e.target.email.value){
    emailError.textContent = 'please enter an email address'
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.email.value).toLowerCase())) {
      emailError.textContent = 'please enter a valid email'
    } else {
      emailError.textContent = ''
    }
  }
  if (!e.target.password.value || !e.target.confirmPassword.value){
    passwordError.textContent = 'please enter a password'
  } else if (e.target.password.value !== e.target.confirmPassword.value) {
    passwordError.textContent = 'passwords do not match'
  } else {
    passwordError.textContent = ''
  }
})