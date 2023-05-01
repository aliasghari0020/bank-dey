
var form = $("#my-form");
form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    labels: {
        finish: "پایان",
        next: "مرحله بعدی",
        previous: "مرحله قبلی"
    },
    onStepChanging: function (event, currentIndex, newIndex) {
        /* allow previous action */
        if (currentIndex > newIndex) {
            return true;
        }

        if ((newIndex - currentIndex) > 1) {
            return false;
        }

        // Needed in some cases if the user went back (clean up)
        if (currentIndex < newIndex) {
            // To remove error styles
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }

          form.validate().settings.ignore = ":disabled,:hidden";
         return form.valid();
    },
    onStepChanged: function () {
        // if(!$('input[type=radio]').prop("checked"))
        // {
        //     return false;
        // } else {
        //     return true;
        // }
    },
    onFinishing: async function (event, currentIndex) {
        const formData = new FormData();
        let national_code = $('#national_code').val();
        let mobile = $('#mobile').val();
        let is_legal = $('#personType option:selected').val();

        let certificate = document.getElementById("certificate").files[0];
        if (!certificate) {
            let response = confirm('شما فایلی را اپلود نکرده اید! با این وجود ادامه می دهید؟');
            if (!response) return;
        }
        // Form data
        if (certificate) formData.append('certificate', certificate);
        formData.append( 'question', 'question');
        formData.append( 'national_code', national_code);
        formData.append( 'is_legal', is_legal);
        formData.append( 'mobile', mobile);
        $.ajax({
            type: 'POST',
            url: 'investor/register',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                let response = JSON.parse(data);
                if (response.status === 201) {
                    $('#panel').css('display','none');
                    $('#final-card').css('display','block');
                }else {
                    alert(response.message);
                }
            },
            error: function(data) {
                console.log('error', data);
            }
        });
        await sleep(3000);
        $('#contractFormValidation').submit();
    },
    onFinished: function (event, currentIndex) {
        console.log('The end!');
    }
})

form.validate({
    rules: {
        is_legal: {
            required: true,
        },
        national_code: {
            required: true,
            maxlength: [11],
            // validate_melli_code: true,
          
        },
        mobile: {
            required: true,
            rangelength: [11, 11],
          
        },
        certificate: {
            // required: true,
            extension: "jpg|pdf|jpeg|png"
        }
    },
    messages: {
        national_code: {
            required: "لطفا کد/شناسه ملی خود را به درستی وارد نمایید.",
        },
        mobile: {
            required: "لطفا شماره موبایل خود را به درستی وارد نمایید(مثال 09127777777)",
        },
        certificate: {
            required: "آپلود فایل الزامی می باشد.",
            extension: "فرمت فایل بایستی یکی از jpg|pdf|jpeg|png باشد."
        }
    },
    errorPlacement: function (error, element) {
        error.appendTo(element.parent("div"));
    }
});
$('#personType').on('change', function () {
    let val = $('#personType option:selected').val();
    if (val == 1) {
        $('.is_not_legal').css('display', 'block');
        $('.is_legal').css('display', 'none');
    } else {
        $('.is_not_legal').css('display', 'none');
        $('.is_legal').css('display', 'block');
    }
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
