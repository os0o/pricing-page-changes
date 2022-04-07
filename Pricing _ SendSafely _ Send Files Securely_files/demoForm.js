function validateDemoRequest() {
    var d = $.Deferred();
    var isValid = true;
    $('.landing-mandatory-text').each(function() {
        if (!validateLandingFormInput(this)) {
            isValid = false;
        }
    });
    if ($("#landing-privacy-container").is(":visible") && !$("#landing-privacy-consent").prop("checked")) {
        alert("You are required to agree to our privacy policy.");
        return;
    }
    d.resolve(isValid);
    return d.promise();
}

function completeDemoRequest() {

    $('#landing-form-working').css('visibility', 'visible');
    $('#landing-form-submit').attr("disabled", true);
    $('#landing-url').val(encode(location.href));

    if (getCookie("SS_GCLID")) {
        $('#landing-url').val(encode(location.href + " SS_GCLID:" + getCookie("SS_GCLID")));
    }

    $("#landing-form").attr("g-recaptcha-response", grecaptcha.getResponse());
    $.post("/auth/json/?action=landingConversion", $("#landing-form").serialize(), function(result) {
        if (result.success) {

            if ($("#landing-privacy-container").is(":visible")) {
                //Click accept since the terms were just agreed to using our checkbox
                $("#cookie_accept").click();
            }

            if ($('#landing-form-redirect-url').val() != "") {
                window.location.href = $('#landing-form-redirect-url').val();
            } else {
                $('#landing-form-working').css('visibility', 'hidden');
                $('#landing-form-inputs').hide();
                $('#landing-form-completed').show();
            }

        } else {
            alert(result.error);
            $('#landing-form-working').css('visibility', 'hidden');
            $('#landing-form-submit').attr("disabled", false);
        }

    });

}

function validateLandingFormInput(input) {
    if ($(input).val() == "") {
        $('#' + $(input).attr("id") + '-mandatory').text("Please complete this mandatory field");
        $('#' + $(input).attr("id") + '-mandatory').css("visibility", "visible");
        $(input).css("border-color", "red");
    } else {
        $('#' + $(input).attr("id") + '-mandatory').css("visibility", "hidden");
        $(input).css("border-color", "");
    }

    if ($(input).attr("id") == "landing-email" && $(input).val() !== "") {
        if (!validateEmail($(input).val())) {
            $('#' + $(input).attr("id") + '-mandatory').text("Invalid email address");
            $('#' + $(input).attr("id") + '-mandatory').css("visibility", "visible");
            $(input).css("border-color", "red");
            return false;
        } else {
            $('#' + $(this).attr("id") + '-mandatory').css("visibility", "hidden");
            $(input).css("border-color", "");
        }
    }

    if ($(input).attr("id") == "landing-employee-count") {
        if ($(input).val() == "--- Select an Option ---") {
            $('#' + $(input).attr("id") + '-mandatory').text("Please select an option from the dropdown");
            $('#' + $(input).attr("id") + '-mandatory').css("visibility", "visible");
            $(input).css("border-color", "red");
            return false;
        } else {
            $('#' + $(input).attr("id") + '-mandatory').css("visibility", "hidden");
            $(input).css("border-color", "");
        }
    }

    if ($(input).attr("id") == "landing-email") {
        if (!validateEmail($(input).val())) {
            $('#' + $(input).attr("id") + '-mandatory').text("Invalid email address");
            $('#' + $(input).attr("id") + '-mandatory').css("visibility", "visible");
            $(input).css("border-color", "red");
            return false;
        } else {
            $('#' + $(input).attr("id") + '-mandatory').css("visibility", "hidden");
            $(input).css("border-color", "");
        }
    }
    return true;
}


function checkCaptcha(captchaDomObject, siteKey, size, callback, badge) {
    if (typeof(grecaptcha) != 'undefined') {
        if (captchaDomObject.attr('widget-id')) {
            var widgetId = captchaDomObject.attr('widget-id');
            grecaptcha.reset(widgetId);
            grecaptcha.execute(widgetId);
        } else {
            captchaDomObject.empty();
            var widgetId = grecaptcha.render(captchaDomObject.attr('id'), {
                "sitekey": siteKey,
                "size": size,
                "callback": callback,
                "badge": badge
            })
            captchaDomObject.attr('widget-id', widgetId);
            grecaptcha.execute(widgetId);
        }
    } else {
        alert("ReCaptcha was not able to load.\nPlease wait or reload the page and try again.");
    }
}

function validateEmail(email) {
    var EMAIL_VALIDATION_REGEX = '^.+@([\\w\\-]+\\.)+[A-Z]{2,20}$';
    var re = new RegExp(EMAIL_VALIDATION_REGEX, 'gi');
    return re.test(email);
}

function encode(input) {
    return $('<div/>').text(input).html();
}



function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}