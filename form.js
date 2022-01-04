

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
   e.preventDefault();

    checkInput()
    //
    if(checkInput()){
        setTimeout(function(){
            return window.location.assign("submit.html")


        },3000)

    }

});

function checkInput(){
    // get the value from the inputs
    const firstNameValue = firstName.value.trim();
    // const lastNameValue = lastName.value.trim()
   const emailValue =  email.value.trim()
    const passwordValue = password.value.trim()


      valid = true;

    if(firstNameValue === ""){
    //  show error
    // add error class
    setErrorFor(firstName,"first name cannot be blank")
        valid = false;

    } else {
        // add success class
        setSuccessFor(firstName);

    }



    // if(lastNameValue === ""){
    //     //  show error
    //     // add error class
    //     setErrorFor(lastName,"last name cannot be blank")
    //     valid = false;

    //     } else {
    //         // add success class
    //         setSuccessFor(lastName);

    //     }


    if(emailValue === ""){
        //  show error
        // add error class
        setErrorFor(email,"email cannot be blank")
            valid = false;
        }  else if(!validateEmail(emailValue)) {
            // check email validity
            setErrorFor(email,"please enter a valid email address")
             valid = false;
        }   else  {
            // add success class
            setSuccessFor(email);

        }

        if(passwordValue === ""){
            //  show error
            // add error class
            setErrorFor(password,"password cannot be blank")
            setTimeout(()=>{
                const small = formControl.querySelector('small');
                 small.innerText = "";
            },2000)
             valid = false;
            } else {
                // add success class
                setSuccessFor(password);

            }


    return valid;

}
//
function setErrorFor(input, message="This input field cannot be blank"){

    const formControl = input.parentElement;   // .form-group
    const small = formControl.querySelector('small');
        small.innerText = message
        formControl.className = "form-group-1 error"

}
//
function setSuccessFor(input){

    const formControl = input.parentElement;
    // add success class
    formControl.className = "form-group-1 success"
}
//
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
