
(function ($) {
    "use strict";
    var poemTitle = $('.validate-input input[name="poemTitle"]');
    var poemSingerName = $('.validate-input input[name="poemSingerName"]');
    var bgImageName = $('.validate-input input[name="bgImageName"]');

    // Solution for hardcording the dummy data //TODO remove
    $('.validate-form .input2').each(function () {
        if ($(this).val().trim() != '') {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    });

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })



    /*==================================================================
    [ Validate ]*/

    // var message = $('.validate-input input[name="poemWriterName"]');


    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(poemTitle).val().trim() == '') {
            showValidate(poemTitle);
            check = false;
        }


        if ($(poemSingerName).val().trim() == '') {
            showValidate(poemSingerName);
            check = false;
        }
        if ($(bgImageName).val().trim() == '') {
            showValidate(bgImageName);
            check = false;
        }

        return check;
    });


    $('.validate-form .input2').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });


    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    $('.imgPoppedUp').each(function () {
        $(this).click(function () {

            var filename = $(this).attr('src').split("/").pop()
            $('#bgImageName').val(filename);
            $('#bgImageName').addClass('has-val');
            $('#closePopBtn').trigger('click');

        });
    });


})(jQuery);