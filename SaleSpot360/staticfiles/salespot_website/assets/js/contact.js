// $(document).ready(function(){
    
//     (function($) {
//         "use strict";

    
//     jQuery.validator.addMethod('answercheck', function (value, element) {
//         return this.optional(element) || /^\bcat\b$/.test(value)
//     }, "type the correct answer -_-");

//     // validate contactForm form
//     // $(function() {
//     //     $('#contactForm').validate({
//     //         rules: {
//     //             name: {
//     //                 required: true,
//     //                 minlength: 3
//     //             },
//     //             subject: {
//     //                 required: true,
//     //                 minlength: 4
//     //             },
//     //             number: {
//     //                 required: true,
//     //                 minlength: 10
//     //             },
//     //             email: {
//     //                 required: true,
//     //                 email: true
//     //             },
//     //             message: {
//     //                 required: true,
//     //                 minlength: 20
//     //             }
//     //         },
//     //         messages: {
//     //             name: {
//     //                 required: "Please enter your name",
//     //                 minlength: "your name must consist of at least 3 characters"
//     //             },
//     //             subject: {
//     //                 required: "come on, you have a subject, don't you?",
//     //                 minlength: "your subject must consist of at least 4 characters"
//     //             },
//     //             number: {
//     //                 required: "Please enter your number",
//     //                 minlength: "your Number must consist of at least 10 characters"
//     //             },
//     //             email: {
//     //                 required: "Please enter your email"
//     //             },
//     //             message: {
//     //                 required: "Please enter your query!!",
//     //                 minlength: "thats all? really?"
//     //             }
//     //         },
//     //         submitHandler: function(form) {
//     //             $(form).ajaxSubmit({
//     //                 type:"POST",
//     //                 data: $(form).serialize(),
//     //                 url:"contact_process.php",
//     //                 success: function() {
//     //                     $('#contactForm :input').attr('disabled', 'disabled');
//     //                     $('#contactForm').fadeTo( "slow", 1, function() {
//     //                         $(this).find(':input').attr('disabled', 'disabled');
//     //                         $(this).find('label').css('cursor','default');
//     //                         $('#success').fadeIn()
//     //                         $('.modal').modal('hide');
// 	// 	                	$('#success').modal('show');
//     //                     })
//     //                 },
//     //                 error: function() {
//     //                     $('#contactForm').fadeTo( "slow", 1, function() {
//     //                         $('#error').fadeIn()
//     //                         $('.modal').modal('hide');
// 	// 	                	$('#error').modal('show');
//     //                     })
//     //                 }
//     //             })
//     //         }
//     //     })
//     // })

//     $(function() {
//         $('#contactForm').validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 3
//                 },
//                 subject: {
//                     required: true,
//                     minlength: 4
//                 },
//                 number: {
//                     required: true,
//                     minlength: 10
//                 },
//                 email: {
//                     required: true,
//                     email: true
//                 },
//                 message: {
//                     required: true,
//                     minlength: 20
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Please enter your name",
//                     minlength: "Your name must consist of at least 3 characters"
//                 },
//                 subject: {
//                     required: "Come on, you have a subject, don't you?",
//                     minlength: "Your subject must consist of at least 4 characters"
//                 },
//                 number: {
//                     required: "Please enter your number",
//                     minlength: "Your number must consist of at least 10 characters"
//                 },
//                 email: {
//                     required: "Please enter your email"
//                 },
//                 message: {
//                     required: "Please enter your query!!",
//                     minlength: "That's all? Really?"
//                 }
//             },
//             submitHandler: function(form) {
//                 // Gather the form data
//                 const full_name = name;
//                 const contact_number = number;
//                 const email = email;
//                 const message = message;

//                 console.log('----------------------------------------------------------')
//                 console.log('full_name : ', full_name);
//                 console.log('contact_number : ', contact_number);
//                 console.log('email : ', email);
//                 console.log('message : ', message);
    
//                 // Optional: get the CSRF token (if needed)
//                 const csrfToken = $('[name=csrfmiddlewaretoken]').val();
    
//                 // Optional: define country code, no_of_users if needed
//                 //const countryCode = $('#country_code').val() || '';
//                 //const no_of_users = $('#no_of_users').val() || '';
    
//                 $.ajax({
//                     url: `${window.location.protocol}//${window.location.host}/api/website/getintouch_response/`,
//                     type: 'POST',
//                     data: {
//                         full_name: full_name,
//                         contact_number: contact_number,
//                         email_id: email,
//                         message: message,
//                         csrfmiddlewaretoken: csrfToken
//                     },
//                     success: function (response) {
//                         Swal.fire({
//                             icon: 'success',
//                             title: 'Success',
//                             text: 'Data submitted successfully!',
//                             confirmButtonText: 'OK',
//                             allowOutsideClick: false
//                         });
    
//                         // Reset the form and other UI
//                         $('#contactForm')[0].reset();
//                         $('#contactForm :input').prop('disabled', false); // re-enable if needed
//                     },
//                     error: function (error) {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Error',
//                             text: 'An error occurred while submitting feedback.',
//                             confirmButtonText: 'OK',
//                             allowOutsideClick: false
//                         });
//                         console.error('Error:', error);
//                     }
//                 });
//             }
//         });
//     });
        
//  })(jQuery)
// })