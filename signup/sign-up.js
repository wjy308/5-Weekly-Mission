const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

const user = {
  email: "test@codeit.com",
  password: "codeit101",
};

function isDuplicate(email){
  return email === user.email;
}

function isPassWord(password){
  return new RegExp(PASSWORD_REGEX).test(password);
}

function isCheckPassword(password, password2){
  return password === password2;
}

function isSignUp(email, password, password2){
  const isEmailRight = isDuplicate(email);
  const isPassWordRight = isPassWord(password);
  const isPassWordCheckRight = isCheckPassword(password, password2);
  if( (!isEmailRight) && isPassWordRight && isPassWordCheckRight){
    return true;
  }
}

export {isDuplicate, isPassWord , isCheckPassword, isSignUp};