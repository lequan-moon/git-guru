$(document).ready(function() {
    callback_datepicker();
});

function callback_datepicker() {
    $('.date').datepicker({
        format: "yyyy/mm/dd",
        language: "ja",
        autoclose: true,
        todayHighlight: true
    });
}