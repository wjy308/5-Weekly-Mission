const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const errMsg = {
  NO_EMAIL: "이메일을 입력해 주세요.",
  NOT_EMAIL: "올바른 이메일 주소가 아닙니다.",
  NO_PWD: "비밀번호를 입력해주세요.",
  CHECK: "이메일 및 비밀번호를 확인해주세요.",
  DUPLICATE_EMAIL: "이미 사용 중인 이메일입니다.",
  REQUIRE_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  NOT_SAME_PASSWORD: "비밀번호가 일치하지 않아요.",
  REMOVE_MSG: "",
};

// 이메일 에러 메세지 출력
function setErrMsg(emailErrMsgEl, errMsg){
  emailErrMsgEl.textContent = errMsg;
}


// 이메일 검사
function isEmailValid(email){
  return new RegExp(EMAIL_REGEX).test(email);
  //정규식에 맞을 시 true 맞지 않을 떈 false 반환;
}


// 형식 맞을 때 비워주기
function removeErrMsg(errMsgEl, errMsg){
  errMsgEl.textContent = errMsg;
}

function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "../assets/images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "../assets/images/eye-off.svg");
}

export {setErrMsg, isEmailValid, removeErrMsg, togglePassword, errMsg};