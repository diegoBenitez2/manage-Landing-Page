import '../sass/index.scss'
let imgs = new Array().fill(0)
import logo  from '../assets/images/logo.svg'
import img1  from '../assets/images/avatar-ali.png'
import img2  from '../assets/images/avatar-anisha.png'
import img3  from '../assets/images/avatar-shanai.png'
import img4  from '../assets/images/avatar-richard.png'
imgs[0] = img1
imgs[1] = img2
imgs[2] = img3
imgs[3] = img4
const $imgLogo = document.getElementById('logo');
const $img = document.getElementsByClassName('card-img-top');

$imgLogo.setAttribute('src',logo)
function setAttribute($element,$attribute) {
  for(let i = 0; i < imgs.length; i++){
    $element[i].setAttribute('src',$attribute[i])
  }
}
setAttribute($img,imgs)




  