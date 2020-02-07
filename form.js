 //alert("Welcome, click button to login ");

const username = document.forms.form.username;
const password = document.forms.form.password;
const form = document.forms.form;
const errorElement = document.querySelector('#error')
let name_error = document.querySelector('.name_error');
let password_error = document.querySelector('.password_error');



let validate = () => {

    if (username.value.length >= 30) {
        name_error.textContent = 'User ID must not be more than 30 characters';
        name_error.style.color = 'white';
        username.focus();
        return false;
    }

    if(username.value == ""){
        name_error.textContent = "Username required";
        name_error.style.color = 'white';
        username.focus()
        return false;
    }
    
}


let validatepassword= () => {

  if (password.value == "") {
      password_error.textContent = 'Password cannot be empty';
     password_error.style.color = 'white';
     password.focus();
      return false;
  }

  if (password.value.length <8) {
      password_error.textContent = 'Password must not be less than 8 characters';
      password_error.style.color = 'white';
      password.focus();
      return false;
  }

  re = /[a-z]/;
  if (!re.test(passsword.value)) {
    password_error.textContent ='Password must contain at least one lowercase letter (a-z)!'
    password.focus();
    return false;
  }

  re = /[A-Z]/;
  if (!re.test(password.value)) {
    password_error.textContent ='Password must contain at least one uppercase letter (A-Z)!'
    password.focus();
    return false;
  }
} 
function validateRegex() {
    // regex condition
    let usernameRegex = /^[a-zA-Z][0-9A-Za]+$/;
    let alphanumeric = /[A-Za-z],*\d|\d.*[A-Za-z]/
    let passwordRegex = /[A-Z].*\d|\d.*[A-Z]/;
  }