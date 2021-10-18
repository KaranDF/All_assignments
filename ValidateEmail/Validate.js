
function validate(){
var validateEmail= document.getElementById("ValidateEmail").value;
var pattern = /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

    if(pattern.test(validateEmail)){
        alert('Email ID is validate');
    }
    else{
        alert('Email ID is not validate');
    }
}