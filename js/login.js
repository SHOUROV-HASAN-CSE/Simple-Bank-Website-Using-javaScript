// step-1:submit button click
document.getElementById('btn-submit').addEventListener('click',function(){
  // step-2:get email address inside the email input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
 // step-2:get password inside the password input field
 const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  // DENGER: Do not Verify email password on the client side
  // step 4: verify email and password
  if(email == 'shourov@gmail.com' && password == 1234){
    window.location.href = 'bank.html';  
  }
  else{
    alert('তুমি Password ভুলে গেছো মনু ঠিক করে মনে করে Password দাও।');
  }

})