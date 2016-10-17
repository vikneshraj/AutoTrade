var dict = {};
	
function SendOTP(otp,phonenumber) {
	dict[phonenumber] = otp;
}

function VerifyOTP(enteredOTP, phNumber) {
    if (dict[phNumber] == enteredOTP) {
        alert("Success");
    }
}

function ResetForm(formID) {
    document.getElementById(formID).reset();
}
$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$(".container-fluid").click(function(){});	
	    
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $('.modal-trigger').leanModal();
    
    //$('#btn_login_navbar').click(function () {

    //})

    $('#signup_button_in_login').click(function(){
        $('#login_modal').closeModal();
        ResetForm("login_form");
    });
    
    $('#signup_button').click(function(){
            $('#signup_modal').closeModal();
    });
    
    $('#signup_button_in_forgotpassword').click(function(){
            $('#forgot_password_modal').closeModal();
    });
    
    $('#forgot_password_close_modal').click(function(){
        $('#login_modal').closeModal();
    });
	
	$('#forgot_password_submit_btn').click(function(){
	    $('#forgotpassword_main_form').css("display", "none");
	    $('#otp_verification_form').css("display", "block");
	    //var phNumber = $('#phone_number.valid').val();
		//var totpObj = new TOTP();
		//var otp = totpObj.getOTP(phNumber);
	    //SendOTP(otp,phNumber);
	    var otP = updateOtp();
    });

	$('#otp_verification_btn').click(function () {
	    var enteredOTP = $('#otp_from_form').text;
	    VerifyOTP(enteredOTP, phNumber);
	});

	$('#change_phone_number_link').click(function () {
	    $('#forgotpassword_main_form').css("display", "block");
	    $('#otp_verification_form').css("display", "none");
	})

    $( window ).resize(function() {
        if ($(window).width() > 1000) { 
            $('#section2').css("height","100vh");
        }
        else {
            $('#section2').css("height","auto");
        }
    });

    $('select').material_select();
})