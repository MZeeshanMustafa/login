var email = document.getElementById('email');
var pass = document.getElementById('password');
var getEmailValue;
var getPasswordValue;
var users = [];

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;

  var signUpId = document.getElementById("signUpId").addEventListener("click" , validation);
  function validation(){

        if (!emailPattern.test(email.value)) {
            alert("*PLEASE ENTER A VALID EMAIL ADDRESS WHICH CONTAIN REGULAR EXPRESSION SUCH AS @ , .COM AND ETC");
        }

        else if(!passwordPattern.test(pass.value)){
            alert("*PASSWORD MUST CONTAIN AT LEAST 8 CHARACTERS AND INCLUDE A MIX OF LETTERS, NUMBERS, AND SPECIAL CHARACTERS")
        }
        else{
            alert("SIGN UP SUCCESSFULLY!..");
           
            users.push({
                email: email.value,
                Password: pass.value
            });
        
            // Logging the emails after the user has been pushed into the array
            users.forEach(function(ele){
                getEmailValue = ele.email;
                getPasswordValue = ele.Password;
              });
              console.log(getEmailValue);
              console.log(getPasswordValue);
            email.value = '';
            pass.value = '';
            
            // Remove the click event listener for sign-up button
            var signUpButton = document.querySelector("#signUpId");
            signUpButton.removeEventListener("click", validation);
             storeUserInfo(URL());
        }  
      }

      function storeUserInfo(){
        var craeteAccount = document.querySelector("#signUpId");
        const loginId = document.querySelector("#signUpId");
        loginId.value = "Login Form";
        var signUpLogInForm = document.getElementById("signUpLoginInForm").innerHTML = "LOGIN FORM"
        craeteAccount.innerHTML = "Login Account"
        craeteAccount.addEventListener("click" , matchinUserInfo);
    
    }
    
function matchinUserInfo(){
   var latestEmail = email.value;
   var latestPassword = pass.value;

   if(latestEmail !== getEmailValue ){
        alert("EMAIL NOT FOUND IN DATABASE PLEASE CORRECT!....");
        email.value = ' ';
    }
    else if(latestPassword !== getPasswordValue){
        alert("PASSWORD NOT FOUND IN DATABASE PLEASE CORRECT!....");
        pass.value = '';
   }
        
   else{
       alert("DATA BASE MATCH LOGIN SUCCESSFULLY!..");
       email.value = ' ';
       pass.value = '';
    }
}



    
