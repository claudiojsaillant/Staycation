//validate name in put
$.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters"); 


$("#comment_form").validate({
    rules:{
        comment:{
            required: true,
            lettersonly:true

        },
        name:{
            required: true,
            lettersonly:true
        },
        email: {
            required: true,
            email: true,
        },
        messages:{
            required: "Please enter an email address",
            email: "Please a valid email address."
        },
        
    },

});

