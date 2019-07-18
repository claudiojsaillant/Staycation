//set some variables

$("#submitBtn").on("click", function(e){
    e.preventDefualt();
    let semail= $("#name_input").val();
    //let name_pattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/; 
    //var email_pattern = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/
    
    var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    let result=semail.match(filter);

    console.log(result);
    console.log(semail);
    if(result==semail){
        alert("there is a match")
    }else{
        alert("No match")
    }
    
    



});

/*
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
    return true;
    }
    else {
    return false;
    }
    }

let result=email.match(email_pattern);
    console.log(result);
    if(result==email){
        alert("there is a match")
    }else{
        alert("No match")
    }







*/
//return pattern.test($.trim(email)); is more adequate solution.
//var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;



   // return $.trim(Email).match(pattern) ? true : false;

//## works for names with white spaces and hyphen
let name_pattern=/([A-Za-z- t]+)/gm;  
//phone numbers
let number_pattern=/[0-9-()+]{3,20}/; 
//address pattern
let address_pattern=/([A-Za-z0-9- t]+)/gm;   
//console.log(result);
///^[a-zA-Z0-9]*$/;
////match a url slug (letters/numbers/hypens)
//var urlslugRegex = '/^[a-z0-9-]+$/'; 
////Match Letters, numbers and hyphens
//var lnhRegex = /([A-Za-z0-9- t]+)/gm;  

//var whiteSpaceRegex = '^[ t]+'; 

//select integers only
//var intRegex = /[0-9 -()+]+$/;  
//match email address
//var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'; 
//Match 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords).
//var passwordStrengthRegex = /((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm; 
//match elements that could contain a phone number
//var phoneNumber = /[0-9-()+]{3,20}/; 