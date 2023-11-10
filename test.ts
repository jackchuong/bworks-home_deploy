const validateEmail = (email) => {
  const regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
};


const validateEmail2 = (email) => {
  const regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
};


console.log(validateEmail2('abc@gmail.com'));
