// Assignment Code
var generateBtn = document.querySelector("#generate");

  var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var lower = ["abcdefghijklmnopqrstuvwxyz"]
  var number = ["1234567890"]
  var special = ["~!@#$%^&*/."]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//making password here
function generatePassword(){ 
  
//how long does password need to be?
var length = window.prompt("How long would you like your password?")
while (length < 8 || length > 128){
  length = window.prompt("Please try again.")
}


console.log("The length of the password is: " + length)

  let bank = []
  let up = window.confirm("Would you like to include upper case letters?") 
  let low = window.confirm("Would you like to include lower case letters?") 
  let num = window.confirm("Would you like to include numbers?") 
  let char = window.confirm("Would you like to include special characters?") 

  if (up === true){
    bank += upper
    console.log(bank)
    }
      
  if (low === true){
    bank += lower
    console.log(bank)
    }
      
  if (num === true){
    bank += number
    console.log(bank)
    }

  if (char === true){
    bank += special
    console.log(bank)
    }
    
    console.log(bank)

   //iterator
  var all = ''
  for (i=0; i < length; i++){
    all += bank[Math.floor(Math.random()*length)]    
    console.log(all);
   }
   console.log("The password is " + all)
  password = all
  return password;

}