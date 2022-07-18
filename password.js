

//password string
//contains conditional statement that checks password length
 //checks for prescence of number and letter
 //condition logs at least 1 pass and fail

 //==========================================




const password = 'Password123sedfsdfsdfsdfs'
function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};

function check(password) {
    console.log(checkUppercase(password))
    if(checkUppercase(password)){
        console.log('Pass: your password contains an uppercase letter')
    } else {console.log('Fail: password doesnt have an uppercase letter')}
    if(password.length >= 10){
        console.log('Pass: your password is at least 10 characters long')
    } else {
        console.log('Fail: password too short')
    }
}

check(password)










// Write a conditional statement that checks if the password meets the following constraints:

// At least 10 characters long

// Contains at least one letter and one number

// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.

// Test out your conditional by changing the value of your password variable and running your file!

