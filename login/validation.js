const user = {
  email: "test@codeit.com",
  password: "codeit101",
};

function isLogIn(email, password){
  return email === user.email && password === user.password;
}

export {isLogIn};


