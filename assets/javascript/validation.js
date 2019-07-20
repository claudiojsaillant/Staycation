//validate name in put
$.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters"); 


$("#comment_form").validate({
    rules:{
        name:{
            required: true,
            lettersonly:true
        }
        
    },

});

