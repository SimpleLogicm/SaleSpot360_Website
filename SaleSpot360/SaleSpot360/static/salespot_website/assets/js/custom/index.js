const contact_numberInput = document.querySelector("#contact_number");
const iti = window.intlTelInput(contact_numberInput, {
    initialCountry: "in",
    separateDialCode: true,
    utilsScript: UTILS_JS_PATH,
    // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000); // Hide after 3 seconds
});


$(document).ready(function () {
    $(".users_button").click(function () {
        $(".users_button").removeClass("active-users-button");
        $(this).addClass("active-users-button");
    });
});

const clearErrors = () => {
    setTimeout(() => {
        $("#full_name_error, #contact_number_error, #email_error, #company_name_error, #no_of_users_error, #mobile_error, #message_error, #captcha_error").fadeOut();
    }, 3000);
};

function submit_user_details_data(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    $("#full_name_error, #contact_number_error, #email_error, #company_name_error, #no_of_users_error, #mobile_error, #message_error, #captcha_error").text("").show();

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

    // Validate Mobile
    // let countryCode = $('#countryCodeIndex').val();
    let countryCode = "+" + iti.getSelectedCountryData().dialCode;
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

    // Validate Name
    let company_name = $('#company_name').val();
    if (!company_name) {
        $("#company_name_error").text("Name is required.").css("color", "red").show();
        clearErrors();
        return; // Stop further validation
    } else if (!/^[A-Za-z]+$/.test(company_name)) {
        $("#company_name_error").text("Name must contain only alphabets.").css("color", "red").show();
        clearErrors();
        return; // Stop further validation
    }

    // Validate Message
    let no_of_users = $('.users_button.active-users-button').data('value');
    if (!no_of_users) {
        $("#no_of_users_error").text("Please select number of users.").css("color", "red").show();
        clearErrors();
        return; // Stop further validation
    }

    // Validate Message
    let message = $('#message').val();
    if (!message) {
        $("#message_error").text("Message is required.").css("color", "red").show();
        clearErrors();
        return; // Stop further validation
    }

    //const selectedUser = $('#select_user').val();
    const csrfToken = $('[name=csrfmiddlewaretoken]').val();  // Fetch CSRF token

    // Validate Captcha
    const enteredCaptcha = $("#captcha").val();
    const actualCaptcha = $("#captcha-text").text();

    if (!enteredCaptcha) {
        $("#captcha_error").text("Captcha is required. Please enter the captcha.").css("color", "red").show();
        clearErrors();
        return; // Stop further validation
    }

    if (enteredCaptcha !== actualCaptcha) {
        $("#captcha_error").text("Captcha did not match. Please try again.").css("color", "red").show();
        clearErrors();
        refreshCaptcha(); // Refresh captcha after a failed attempt
        return; // Stop further validation
    }

    console.log('full_name : ', full_name)
    console.log('countryCode : ', countryCode)
    console.log('contact_number : ', contact_number)
    console.log('email : ', email)
    console.log('company_name : ', company_name)
    console.log('no_of_users : ', no_of_users)
    console.log('message : ', message)

    $.ajax({
        url: `${window.location.protocol}//${window.location.host}/save_user_response/`,
        type: 'POST',
        data: {
            full_name: full_name,
            country_code: countryCode,
            contact_number: contact_number,
            email_id: email,
            company_name: company_name,
            no_of_users: no_of_users,
            message: message,
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
            $('#UserResponse_Form')[0].reset();
            $(".users_button").removeClass("active-users-button");
            refreshCaptcha();
        },
        error: function (error) {
            alert('An error occurred while submitting feedback.');
            console.error('Error:', error);
        }
    });

}

// Function to generate random captcha
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 7; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Function to refresh captcha
function refreshCaptcha() {
    const newCaptcha = generateCaptcha();
    $('#captcha-text').text(newCaptcha);
    $('#captcha').val('');
    $('#captcha-result').text('');
}

$(document).ready(function () {
    // Initialize captcha on page load
    refreshCaptcha();

    // Refresh captcha on button click
    $('.refresh-captcha').click(function () {
        refreshCaptcha();
    });

    // Submit feedback function with captcha check

});


// <!-- New Loading animation Script -->
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



document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".users_button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active")); // Remove active from all
            this.classList.add("active"); // Add to clicked
        });
    });
});