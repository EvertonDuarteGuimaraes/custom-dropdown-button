$(document).ready(function () {
    $('.dropdown-place-option').click(function () {
        if ($('.dropdown-place-items').is(':hidden')) $('.dropdown-place-items').show();
        else {
            $('.dropdown-place-items').hide();
        }
    });
});
