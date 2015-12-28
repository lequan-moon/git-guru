/**
 * Event when click button add budget
 */

$('#btn-add-budget').click(function(){
    $("#budget_array").append('<div class="col-md-3 padding-top-5">' +
        $('#budget_array div:first-child').html() + '</div>');
    $('#budget_array div:last-child input').val("");
});

/**
 * Event when click button add req_decision
 */

$('#btn-add-req_decision').click(function(){
    $("#req_decision_array").append('<div class="col-md-3 padding-top-5">' +
        $('#req_decision_array div:first-child').html() + '</div>');
    $('#req_decision_array div:last-child input').val("");
});

/**
 * Check submit status prevent multi submit form
 */

var is_submit = false;
$('#search_form').submit(function(event) {
    if (!is_submit) {
        is_submit = true;
        $(this).submit();
    } else {
        event.preventDefault();
    }
});