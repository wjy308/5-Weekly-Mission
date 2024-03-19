import { setErrMsg, isEmailValid, removeErrMsg, errMsg, togglePassword } from "../js/common-validation.js";
import { isDuplicate, isPassWord, isCheckPassword, isSignUp } from "./sign-up.js"


const emailInputEl = document.querySelector('.input-email');
const emailErrMsgEl = document.querySelector('.err-email');
emailInputEl.addEventListener("blur", validateEmail);

// 1. 이메일이 비었는가
// 2. 유효한 이메일인가
// 3. 중복 검사
// 4. 유효하다면 p태그 비워주기
function validateEmail(){
  const email = emailInputEl.value;
  if(email === ""){
    setErrMsg(emailErrMsgEl, errMsg.NO_EMAIL);
    return;
  }
  if(!isEmailValid(email)){
    setErrMsg(emailErrMsgEl, errMsg.NOT_EMAIL);
    return;
  }
  if(isDuplicate(email)){
    setErrMsg(emailErrMsgEl, errMsg.DUPLICATE_EMAIL)
    return;
  }
  removeErrMsg(emailErrMsgEl, errMsg.REMOVE_MSG);
}

const passwordInputEl = document.querySelector('.input-password');
const passwodrErrorMessageEl = document.querySelector('.err-password');
passwordInputEl.addEventListener("blur", validatePassword);

const passwordCheckInputEl = document.querySelector('.input-password-check');
const passwordCheckErrorMessageEl = document.querySelector('.err-password-check');
passwordCheckInputEl.addEventListener("blur", checkPassword);

function validatePassword(){
  const password = passwordInputEl.value;
  if(password === ""){
    setErrMsg(passwodrErrorMessageEl, errMsg.NO_PWD);
    return;
  }
  if(!isPassWord(password)){
    setErrMsg(passwodrErrorMessageEl, errMsg.REQUIRE_PASSWORD);
    return;
  }
  removeErrMsg(passwodrErrorMessageEl, errMsg.REMOVE_MSG);
}

function checkPassword(){
  const password = passwordInputEl.value;
  const password2 = passwordCheckInputEl.value;
  if(!isCheckPassword(password, password2)){
    setErrMsg(passwordCheckErrorMessageEl, errMsg.NOT_SAME_PASSWORD);
    return;
  }
  removeErrMsg(passwordCheckErrorMessageEl, errMsg.REMOVE_MSG);
}

const passwordToggleButton = document.querySelector("#password-toggle");
const passwordCheckToggleButton = document.querySelector("#password-check-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInputEl, passwordToggleButton)
);
passwordCheckToggleButton.addEventListener("click", () =>
  togglePassword(passwordCheckInputEl, passwordCheckToggleButton)
);

const loginForm = document.querySelector("#form");
loginForm.addEventListener("submit",clickLoginBtn);

function clickLoginBtn(e){
  const inputEmail = emailInputEl.value;
  const inputPassword = passwordInputEl.value;
  const inputPassword2 = passwordCheckInputEl.value;
  e.preventDefault();

  if(isSignUp(inputEmail, inputPassword, inputPassword2)){
    location.href = "../folder/index.html";
    return;
  }
  validateEmail();
  validatePassword();
  checkPassword();
}