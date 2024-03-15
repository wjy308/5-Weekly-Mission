const errMsg = {
  0: "이메일을 입력해 주세요.",
  1: "올바른 이메일 주소가 아닙니다.",
  2: "비밀번호를 입력해주세요.",
  3: "이메일 및 비밀번호를 확인해주세요.",
  4: "",
};

const user = {
  email: "test@codeit.com",
  password: "codeit101",
};

const emailInputEl = document.querySelector('.input-email');
const passwordInputEl = document.querySelector('.input-password');
const loginButtonEl = document.querySelector('.btnLogin');
const emailErrorMessageEl = document.querySelector('.err-email');
const passwodrErrorMessageEl = document.querySelector('.err-password');

export {emailInputEl, passwordInputEl, loginButtonEl, emailErrorMessageEl, passwodrErrorMessageEl, errMsg, user};