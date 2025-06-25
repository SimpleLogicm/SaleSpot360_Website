window.addEventListener("load", () => {
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
            }, 2000); // Hide after 3 seconds
            });

            document.getElementById("loginLink").addEventListener("click", function () {
                const loginUrl = `${window.location.protocol}//${window.location.host}/admin/login/?next=/admin/`;
                window.open(loginUrl, "_blank");
            });


            const clearErrors = () => {
                setTimeout(() => {
                    $("#full_name_error, #company_name_error, #email_error, #contact_number_error, #country_name_error").fadeOut();
                }, 3000);
            };
    
            function submit_user_details_data(event) {  
                event.preventDefault(); // Prevent default form submission
    
                // Clear previous error messages
                $("#full_name_error, #company_name_error, #email_error, #contact_number_error, #country_name_error").text("").show();
        
                // Validate Name
                let full_name = $('#full_name').val();
                if (!full_name) {
                    $("#full_name_error").text("Name is required.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                } else if (!/^[A-Za-z]+$/.test(full_name)) {
                    $("#full_name_error").text("Name must contain only alphabets.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                }

                // Validate Name
                let company_name = $('#company_name').val();
                if (!company_name) {
                    $("#company_name_error").text("Company name is required.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                } else if (!/^[A-Za-z]+$/.test(company_name)) {
                    $("#company_name_error").text("Company name must contain only alphabets.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                }

                // Validate Email
                let email = $('#email').val();
                if (!email) {
                    $("#email_error").text("Email Id is required.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
                    $("#email_error").text("Invalid email id format.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                }
    
                // Validate Mobile
                let contact_number = $('#contact_number').val();
                let mobilePattern = /^[0-9]+$/;
    
                if (!contact_number) {
                    $("#contact_number_error").text("Mobile number is required.").css("color", "red").show();
                    clearErrors();
                    return;
                } else if (!mobilePattern.test(contact_number)) {
                    $("#contact_number_error").text("Mobile number must contain only numerical digits.").css("color", "red").show();
                    clearErrors();
                    return;
                } else if (contact_number.length < 10) {
                    $("#contact_number_error").text("Mobile number should be at least 10 digits.").css("color", "red").show();
                    clearErrors();
                    return;
                } else if (contact_number.length > 10) {
                    $("#contact_number_error").text("Mobile number should only be a maximum of 10 digits.").css("color", "red").show();
                    clearErrors();
                    return;
                }
    
                
    
                // Validate Name
                let country_name = $('#country_name').val();
                if (!country_name) {
                    $("#country_name_error").text("Country name is required.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                } else if (!/^[A-Za-z]+$/.test(country_name)) {
                    $("#country_name_error").text("Country name must contain only alphabets.").css("color", "red").show();
                    clearErrors();
                    return; // Stop further validation
                }
    
                const csrfToken = $('[name=csrfmiddlewaretoken]').val();  // Fetch CSRF token

                $.ajax({
                    url: `${window.location.protocol}//${window.location.host}/small_userdetail_form_response/`,
                    type: 'POST',
                    data: {
                        full_name: full_name,
                        company_name: company_name,
                        email_id: email,
                        contact_number: contact_number,
                        country_name: country_name,
                        csrfmiddlewaretoken: csrfToken
                    },
                    success: function (response) {
    
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Data submitted successfully!',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                        });
    
                        // Optionally clear the form and refresh the captcha
                        $('#contactForm')[0].reset();
                    },
                    error: function (error) {
                        alert('An error occurred while submitting feedback.');
                        console.error('Error:', error);
                    }
                });
                
            }

            setTimeout(() => {
                const logo1 = document.getElementById('logo1');
                const logo2 = document.getElementById('logo2');

                // Position to center and trigger spin
                logo1.style.left = 'calc(50% - min(40vw, 200px) / 2)';
                logo1.style.opacity = '1';
                logo2.style.right = 'calc(50% - min(40vw, 200px) / 2)';
                logo2.style.opacity = '1';

                logo1.style.animation = 'spinYForward 1.2s ease-in-out forwards';
                logo2.style.animation = 'spinYBackward 1.2s ease-in-out forwards';

                // Fade out after spin
                setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.transition = 'opacity 0.6s ease';
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 600);
                }, 1200);
            }, 1300);