import '../sass/index.scss'
import '../assets/images/logo.svg'
import '../assets/images/avatar-ali.png'
import  '../assets/images/avatar-anisha.png'
import '../assets/images/avatar-shanai.png'
import '../assets/images/avatar-richard.png'
import '../assets/images/icon-facebook.svg'
import '../assets/images/icon-youtube.svg'
import '../assets/images/icon-twitter.svg'
import '../assets/images/icon-pinterest.svg'
import '../assets/images/icon-instagram.svg'
//load DOM elements
const $email = document.getElementById('email')
const $msgError = document.getElementById('msg-email')
const $form = document.querySelector('form')
const $btnNavBar = document.querySelector('button.navbar-toggler')
const $navBar = document.querySelector('nav.navbar')
const $body = document.querySelector('body')
//form actions
$email.addEventListener('input',(event)=>{
  if($email.validity.valid){
    $msgError.innerHTML = ""
    $msgError.className = "email_error"
  }
  else{
    showError()
  }
})
$form.addEventListener('submit',(event)=>{
  if(!$email.validity.valid){
    showError()
    event.preventDefault()
  }
})
function showError(){
  $msgError.classList.add('active')
  if($email.validity.valueMissing){
  $msgError.textContent = 'You must enter an email address.'
  }
  else if ($email.validity.typeMismatch){
  $msgError.textContent = 'Please, insert a valid email'
  }
}
//overlay and event click navBar
$btnNavBar.addEventListener('click',()=>{
  $navBar.classList.toggle('overlay')
  $body.classList.toggle('scroll-hidden')
})






  