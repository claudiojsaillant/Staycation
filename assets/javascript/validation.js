//validate name in put
$.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters");
$.validator.addMethod("strongPassword", function (value, element) {
    return this.optional(element) || value.length >= 8
        && /\d/.test(value)
        && /[a-z]/i.test(value);
}, "Your password must be at least 8 characters long and containat least one number and one special character.");

$.validator.addMethod("rangeWords", function (value, element, params) {
    var valueStripped = stripHtml(value),
        regex = /\b\w+\b/g;
    return this.optional(element) || valueStripped.match(regex).length >= params[10] && valueStripped.match(regex).length <= params[100];
}, $.validator.format("Please enter between {10} and {100} words."));


$("#comment_form").validate({


    rules: {
        password: {
            required: true,
            strongPassword: true
        },
        comment: {
            required: true,
            lettersonly: true,
            rangeWords: true

        },
        name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            email: true,
        },
        messages: {
            required: "Please enter an email address",
            email: "Please a valid email address."
        },

    },

});

var maxLength = 300;
$('#comment').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});





