import handlePasswordSight from './components/eyesOnOff.js';
import { $eyes, $passwordRe } from './components/eyesOnOff.js';
import valueWrong from './components/passwordRepeat.js';
// import scrollNavShadow from './scrollNavShadow.js';
const $signUpButton = document.querySelector('.signup_button');

$eyes.addEventListener('click', handlePasswordSight);
$passwordRe.addEventListener('change', valueWrong);
$signUpButton.addEventListener('submit', valueWrong);
// window.addEventListener('scroll', scrollNavShadow);
